import chatsAPI from '../api/ChatsAPI.ts';
import store from '../core/Store.ts';
import { Chat } from '../types/types.ts';
import { MessagesController } from './MessagesController.ts';

export class ChatsController {
  static async create(title: string) {
    try {
      await chatsAPI.createChat(title);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'chat create error');
    }
  }

  static async getChatsList() {
    try {
      const chats = await chatsAPI.getChats();
      chats.map(async (chat: Chat) => {
        const { token } = await this.getToken(chat.id);
        await MessagesController.connect(chat.id, token);
      });
      store.set('chats', chats);
    } catch (error) {
      console.log(error, 'get chats list error');
    }
  }

  static async addUserToChat(chatId: number, userId: number[]) {
    try {
      await chatsAPI.addUsers(userId, chatId);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'add user to chat error');
    }
  }

  static async deleteUserFromChat(chatId: number, userId: number[]) {
    try {
      await chatsAPI.deleteUsers(userId, chatId);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'delete user from chat error');
    }
  }

  static selectChat(chatId: number) {
    const target = store.getState().chats?.find((chat) => chat.id === chatId);
    store.set('selectedChat', [target]);
  }

  static async getToken(chatId: number) {
    return chatsAPI.getToken(chatId);
  }
}
