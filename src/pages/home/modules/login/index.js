import Handlebars from "handlebars";
import { tmpl } from "./login.tmpl.js";
import "./login.scss";
import { Button } from "../../../../components/button/index.js";

export const Login = () => {
  return Handlebars.compile(tmpl)({
    loginBtn: Button({
      text: "Войти",
      type: "submit",
      className: "form__button form__button_type_sign-in",
    }),
    registerBtn: Button({
      text: "Зарегистрироваться",
      type: "button",
      className: "form__button form__button_type_sign-up",
    }),
  });
};
