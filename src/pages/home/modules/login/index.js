import Handlebars from "handlebars";
import { tmpl } from "./login.tmpl.js";
import "./login.scss";

import { Button } from "../../../../components/button/index.js";
import { Link } from "../../../../components/link/index.js";

export const Login = () => {
  return Handlebars.compile(tmpl)({
    loginBtn: Button({
      text: "Войти",
      type: "submit",
      className: "form__sign-in-button",
    }),
    registerLink: Link({
      text: "Зарегистрироваться",
      to: "/register",
    }),
  });
};
