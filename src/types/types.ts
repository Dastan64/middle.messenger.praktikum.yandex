export interface SignUpData {
  email: string;
  first_name: string;
  login: string;
  password: string;
  phone: string;
  second_name: string;
}

export interface SignInData {
  login: string;
  password: string;
}

export interface UserInfo {
  avatar: string;
  display_name: string;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
}

export enum Routes {
  Chats = '/chats',
  EditPassword = '/edit-password',
  EditProfile = '/edit-profile',
  Error = '/500',
  Home = '/',
  Login = '/login',
  NotFound = '/404',
  Profile = '/profile',
  Register = '/register'
}
