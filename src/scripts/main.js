import "../styles/style.scss";

// Pages
import { NotFound } from "../pages/not-found/index.js";
import { ErrorPage } from "../pages/error-page/index.js";
import { Profile } from "../pages/profile/index.js";
import { Home } from "../pages/home/index.js";

const ROUTES = {
  "/": Home(),
  "/404": NotFound(),
  "/505": ErrorPage(),
  "/profile": Profile(),
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    root.innerHTML = ROUTES[window.location.pathname];
  }
});
