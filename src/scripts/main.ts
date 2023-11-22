import '../styles/style.scss';

import { Router } from '../core/Router.ts';
import { Routes } from '../types/types.ts';
import { AuthController } from '../controllers/AuthController.ts';
import '../utils/registerHelpers.ts';

// Pages
import { Login } from '../pages/home/modules/login/index.ts';
import { Register } from '../pages/home/modules/register/index.ts';
import { Chats } from '../modules/chats/index.ts';
import { ChangePassword } from '../pages/profile/modules/edit-password/index.ts';
import { ChangeProfileData } from '../pages/profile/modules/edit-profile/index.ts';
import { Profile } from '../pages/profile/index.ts';
import { NotFoundPage } from '../pages/not-found-page/index.ts';
import { ErrorPage } from '../pages/error-page/index.ts';

window.addEventListener('DOMContentLoaded', async () => {
  Router.getInstance()
    .use(Routes.Home, Login)
    .use(Routes.Login, Login)
    .use(Routes.Register, Register)
    .use(Routes.Chats, Chats)
    .use(Routes.EditPassword, ChangePassword)
    .use(Routes.EditProfile, ChangeProfileData)
    .use(Routes.Profile, Profile)
    .use(Routes.NotFound, NotFoundPage)
    .use(Routes.Error, ErrorPage);

  let isProtectedRoute = true;

  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case Routes.Home:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    Router.getInstance().start();
    if (!isProtectedRoute) {
      Router.getInstance().go(Routes.Profile);
    }
  } catch (error) {
    Router.getInstance().start();
    if (isProtectedRoute) {
      Router.getInstance().go(Routes.Home);
    }
  }
});
