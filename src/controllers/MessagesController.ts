import store from '../core/Store.ts';
import { WebSocketEvents, WebSocketTransport } from '../utils/WebSocketTransport.ts';
import { MessageData } from '../types/types.ts';
// eslint-disable-next-line import/no-cycle
import { ChatsController } from './ChatsController.ts';

export class MessagesController {
  private static transports: Map<number, WebSocketTransport> = new Map();

  static async connect(chatId: number, token: string) {
    if (this.transports.has(chatId)) {
      return;
    }
    const userId = store.getState().user?.id;

    const transport = new WebSocketTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
    this.transports.set(chatId, transport);

    await transport.connect();
    this.subscribe(transport, chatId);
    this.fetchOldMessages(chatId);
  }

  static async sendMessage(chatId: number, message: string) {
    const transport = this.transports.get(chatId);
    if (!transport) {
      throw new Error(`Чат ${chatId} не подключён`);
    }

    if (message) {
      transport.send({
        type: 'message',
        content: message,
      });
    }
  }

  static fetchOldMessages(chatId: number) {
    const transport = this.transports.get(chatId);

    if (!transport) {
      throw new Error(`Чат ${chatId} не подключён`);
    }
    transport.send({
      type: 'get old',
      content: '0',
    });
  }

  static handleMessages(messages: MessageData[] | MessageData, chatId: number) {
    const incomingMessages = Array.isArray(messages) ? messages.reverse() : [messages];
    const currentMessages = store.getState().messages?.[chatId] ?? [];
    const allMessages = [...currentMessages, ...incomingMessages].filter((message) => message.type === 'message');
    store.set(`messages.${chatId}`, allMessages);
    if (!Array.isArray(messages)) {
      this.findMessages(chatId);
    }
    ChatsController.getChatsList();
  }

  static findMessages(chatId: number) {
    const messages = store.getState().messages?.[chatId];
    store.set('currentMessages', messages);
  }

  static subscribe(transport: WebSocketTransport, chatId: number) {
    transport.on(WebSocketEvents.Message, (data) => {
      this.handleMessages(data, chatId);
    });
  }
}
