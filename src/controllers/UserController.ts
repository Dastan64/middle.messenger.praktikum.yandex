import { ExtendedProfileData, PasswordData, ProfileData } from '../types/types.ts';
import userAPI from '../api/UserAPI.ts';
import store from '../core/Store.ts';
import router from '../core/Router.ts';
import { AuthController } from './AuthController.ts';

export class UserController {
  static async changeProfile(data: ProfileData) {
    try {
      const newProfileData: ExtendedProfileData = await userAPI.changeProfile(data);
      store.set('user', newProfileData);
      router.go('/profile');
    } catch (error) {
      console.log(error, 'change profile error');
    }
  }

  static async changeAvatar(data: FormData) {
    try {
      await userAPI.changeAvatar(data);
      await AuthController.fetchUser();
    } catch (error) {
      console.log(error, 'change avatar error');
    }
  }

  static async changePassword(data: PasswordData) {
    try {
      await userAPI.changePassword(data);
      router.go('/profile');
    } catch (error) {
      console.log(error, 'change password error');
    }
  }
}
