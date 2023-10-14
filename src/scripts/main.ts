import '../styles/style.scss';
import Block from '../core/Block.ts';
import { render } from '../core/render.ts';

// Pages
import { HomePage } from '../pages/home/index.ts';
import { ErrorPage } from '../pages/error-page/index.ts';
import { Profile } from '../pages/profile/index.ts';
import { ChangeProfileData } from '../pages/profile/modules/change-profile-data/index.ts';
import { ChangePassword } from '../pages/profile/modules/change-password/index.ts';
import { Login } from '../pages/home/modules/login/index.ts';
import { Register } from '../pages/home/modules/register/index.ts';
import { Chats } from '../modules/chats/index.ts';

const ROUTES: Record<string, Block> = {
  '/': new HomePage(),
  '/404': new ErrorPage({
    statusCode: '404',
    message: 'Упс, не туда попали',
  }),
  '/500': new ErrorPage({
    statusCode: '500',
    message: 'Упс, ошибка, уже фиксим',
  }),
  '/profile': new Profile(),
  '/change-profile-data': new ChangeProfileData(),
  '/change-password': new ChangePassword(),
  '/chats': new Chats(),
  '/login': new Login(),
  '/register': new Register(),
};

document.addEventListener('DOMContentLoaded', () => {
  render('#app', ROUTES[window.location.pathname]);
});
