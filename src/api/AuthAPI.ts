import { BaseAPI } from './BaseAPI.ts';
import { SignInData, SignUpData, UserInfo } from '../types/types.ts';

class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signup(data: SignUpData) {
    return this.http.post('/signup', { data });
  }

  signin(data: SignInData) {
    return this.http.post('/signin', { data });
  }

  getUserInfo(): Promise<UserInfo> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }
}

export default new AuthAPI();
