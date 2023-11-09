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

export interface ProfileData {
  display_name: string;
  email: string;
  first_name: string;
  login: string;
  phone: string;
  second_name: string;
}

export interface ExtendedProfileData extends ProfileData {
  avatar: string;
  id: string;
}

export interface PasswordData {
  newPassword: string;
  oldPassword: string;
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
  Register = '/register',
}

export interface Chat {
  avatar: string;
  created_by: number;
  id: number;
  last_message: LastMessage;
  title: string;
  unread_count: number;
}

export interface LastMessage {
  content: string;
  time: string;
  user: {
    avatar: string;
    email: string;
    first_name: string;
    login: string;
    phone: string;
    second_name: string;
  };
}

export interface MessageData {
  chat_id: number;
  content: string;
  file?: {
    content_size: number;
    content_type: string;
    filename: string;
    id: number;
    path: string;
    upload_date: string;
    user_id: number;
  };
  time: string;
  type: string;
  user_id: string;
}
