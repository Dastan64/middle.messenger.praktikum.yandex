import { BaseAPI } from './BaseAPI.ts';

class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  createChat(title: string) {
    return this.http.post('/', {
      data: {
        title,
      },
    });
  }

  getChats() {
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

  delete(chatId: number) {
    return this.http.delete('/', {
      data: {
        chatId,
      },
    });
  }

  getToken(chatId: number) {
    return this.http.post(`/token/${chatId}`);
  }
}

export default new ChatsAPI();
