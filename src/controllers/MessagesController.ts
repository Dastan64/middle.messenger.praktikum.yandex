import store from '../core/Store.ts';
import { WebSocketEvents, WebSocketTransport } from '../utils/WebSocketTransport.ts';
import { MessageData } from '../types/types.ts';

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

  static handleMessages(messages: MessageData[] | [], chatId: number) {
    const currentMessages = store.getState().messages?.[chatId] ?? [];
    const allMessages = [...messages, ...currentMessages];
    store.set(`messages.${chatId}`, allMessages);
    console.log(store);
  }

  static subscribe(transport: WebSocketTransport, chatId: number) {
    transport.on(WebSocketEvents.Message, (data) => this.handleMessages(data, chatId));
  }
}
