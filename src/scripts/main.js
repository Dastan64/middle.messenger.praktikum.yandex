import "../styles/style.scss";

import { ErrorPage } from "../pages/error-page/index.js";
import { Profile } from "../pages/profile/index.js";
import { Home } from "../pages/home/index.js";
import { Login } from "../pages/home/modules/login/index.js";
import { Register } from "../pages/home/modules/register/index.js";
import { Chats } from "../modules/chats/index.js";
import { ChangeProfileData } from "../pages/profile/modules/change-profile-data/index.js";
import { ChangePassword } from "../pages/profile/modules/change-password/index.js";

const ROUTES = {
  "/": Home(),
  "/404": ErrorPage({ statusCode: "404", message: "Упс, не туда попали" }),
  "/500": ErrorPage({ statusCode: "500", message: "Упс, ошибка, уже фиксим" }),
  "/profile": Profile(),
  "/change-profile-data": ChangeProfileData(),
  "/change-password": ChangePassword(),
  "/chats": Chats(),
  "/login": Login(),
  "/register": Register(),
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    root.innerHTML = ROUTES[window.location.pathname];
  }
});
