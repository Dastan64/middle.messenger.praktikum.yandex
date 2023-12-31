import { BaseAPI } from './BaseAPI.ts';
import { PasswordData, ProfileData } from '../types/types.ts';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  changeProfile(data: ProfileData) {
    return this.http.put('/profile', { data });
  }

  changeAvatar(data: FormData) {
    return this.http.put('/profile/avatar', { data });
  }

  changePassword(data: PasswordData) {
    return this.http.put('/password', { data });
  }
}

export default new UserAPI();
