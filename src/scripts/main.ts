import '../styles/style.scss';
// import Block from '../core/Block.ts';
// import { render } from '../core/render.ts';
// Pages
import { HomePage } from '../pages/home/index.ts';
import { ChangePassword } from '../pages/profile/modules/edit-password/index.ts';
import { Login } from '../pages/home/modules/login/index.ts';
import { Chats } from '../modules/chats/index.ts';
import { Register } from '../pages/home/modules/register/index.ts';
import { ChangeProfileData } from '../pages/profile/modules/edit-profile/index.ts';
import { Profile } from '../pages/profile/index.ts';
import router from '../core/Router.ts';
//
// const ROUTES: Record<string, Block> = {
//   '/': new HomePage(),
//   '/404': new ErrorPage({
//     statusCode: '404',
//     message: 'Упс, не туда попали',
//   }),
//   '/500': new ErrorPage({
//     statusCode: '500',
//     message: 'Упс, ошибка, уже фиксим',
//   }),
//   '/profile': new Profile(),
//   '/edit-profile': new ChangeProfileData(),
//   '/edit-password': new ChangePassword(),
//   '/chats': new Chats(),
//   '/login': new Login(),
//   '/register': new Register(),
// };

router
  .use('/', HomePage)
  .use('/login', Login)
  .use('/register', Register)
  .use('/chats', Chats)
  .use('/edit-password', ChangePassword)
  .use('/edit-profile', ChangeProfileData)
  .use('/profile', Profile)
  .start();
