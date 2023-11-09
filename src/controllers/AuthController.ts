import authAPI from '../api/AuthAPI.ts';
import {
  Routes, SignInData, SignUpData, UserInfo,
} from '../types/types.ts';
import store from '../core/Store.ts';
import router from '../core/Router.ts';

export class AuthController {
  static async signin(data: SignInData) {
    try {
      await authAPI.signin(data);
      await this.fetchUser();
      router.go(Routes.Chats);
    } catch (error) {
      console.log(error, 'sign in error');
    }
  }

  static async signup(data: SignUpData) {
    try {
      await authAPI.signup(data);
      await this.fetchUser();
      router.go(Routes.Profile);
    } catch (error) {
      console.log(error, 'sign up error');
    }
  }

  static async logout() {
    try {
      await authAPI.logout();
      store.set('user', undefined);
      router.go(Routes.Login);
    } catch (error) {
      console.log(error, 'log out error');
    }
  }

  static async fetchUser() {
    const user = await authAPI.getUserInfo();
    store.set('user', user as UserInfo);
  }
}
