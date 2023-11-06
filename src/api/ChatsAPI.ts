import { BaseAPI } from './BaseAPI.ts';

class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  create(title: string) {
    return this.http.post('/', { data: title });
  }

  getChatsList() {
    return this.http.get('/');
  }

  addUsers(users: number[], chatId: number) {
    return this.http.put('/users', {
      data: {
        users,
        chatId,
      },
    });
  }

  deleteUsers(users: number[], chatId: number) {
    return this.http.delete('/users', {
      data: {
        users,
        chatId,
      },
    });
  }
}

export default new ChatsAPI();
