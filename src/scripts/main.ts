import '../styles/style.scss';

import { ErrorPage } from '../pages/error-page/index.ts';
import { Profile } from '../pages/profile/index.ts';
import { Home } from '../pages/home/index.ts';
import { Login } from '../pages/home/modules/login/index.ts';
import { Register } from '../pages/home/modules/register/index.ts';
import { Chats } from '../modules/chats/index.ts';
import { ChangeProfileData } from '../pages/profile/modules/change-profile-data/index.ts';
import { ChangePassword } from '../pages/profile/modules/change-password/index.ts';

const ROUTES: Record<string, string> = {
  '/': Home(),
  '/404': ErrorPage({
    statusCode: '404',
    message: 'Упс, не туда попали',
  }),
  '/500': ErrorPage({
    statusCode: '500',
    message: 'Упс, ошибка, уже фиксим',
  }),
  '/profile': Profile(),
  '/change-profile-data': ChangeProfileData(),
  '/change-password': ChangePassword(),
  '/chats': Chats(),
  '/login': Login(),
  '/register': Register(),
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app') as HTMLDivElement;

  if (root) {
    root.innerHTML = ROUTES[window.location.pathname];
  }
});
