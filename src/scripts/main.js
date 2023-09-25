import "../styles/style.scss";

import { NotFound } from "../pages/not-found/index.js";
import { ErrorPage } from "../pages/error-page/index.js";
import { Profile } from "../pages/profile/index.js";
import { Home } from "../pages/home/index.js";
import { Chats } from "../modules/chats/index.js";
import { Login } from "../pages/home/modules/login/index.js";
import { Register } from "../pages/home/modules/register/index.js";

const ROUTES = {
  "/": Home(),
  "/404": NotFound(),
  "/505": ErrorPage(),
  "/profile": Profile(),
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
