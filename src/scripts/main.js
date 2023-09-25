import "../styles/style.scss";

// Pages
import { NotFound } from "../pages/not-found/index.js";
import { ErrorPage } from "../pages/error-page/index.js";
import { Profile } from "../pages/profile/index.js";
import { Main } from "../pages/main/index.js";

const ROUTES = {
  "/": Main(),
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
