import chatsAPI from '../api/ChatsAPI.ts';

export class ChatsController {
  static async create(title: string) {
    try {
      await chatsAPI.create(title);
    } catch (error) {
      console.log(error, 'chat create error');
    }
  }

  static async getChatsList() {
    try {
      await chatsAPI.getChatsList();
    } catch (error) {
      console.log(error, 'chat create error');
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
      console.log(error, 'add user to chat error');
    }
  }
}
