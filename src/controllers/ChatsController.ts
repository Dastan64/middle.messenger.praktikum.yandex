import chatsAPI from '../api/ChatsAPI.ts';
import store from '../core/Store.ts';

export class ChatsController {
  static async create(title: string) {
    try {
      await chatsAPI.create(title);
      await this.getChatsList();
    } catch (error) {
      console.log(error, 'chat create error');
    }
  }

  static async getChatsList() {
    try {
      const chats = await chatsAPI.getChatsList();
      store.set('chats', chats);
    } catch (error) {
      console.log(error, 'get chats list error');
    }
  }

  static async addUserToChat(chatId: number, userId: number) {
    try {
      await chatsAPI.addUsers([userId], chatId);
    } catch (error) {
      console.log(error, 'add user to chat error');
    }
  }

  static async deleteUserFromChat(chatId: number, userId: number) {
    try {
      await chatsAPI.deleteUsers([userId], chatId);
    } catch (error) {
      console.log(error, 'delete user from chat error');
    }
  }
}
