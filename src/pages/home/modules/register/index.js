import Handlebars from "handlebars";
import { tmpl } from "./register.tmpl.js";
import "./register.scss";

import { Link } from "../../../../components/link/index.js";
import { Button } from "../../../../components/button/index.js";

export const Register = () => {
  return Handlebars.compile(tmpl)({
    mainPageLink: Link({
      to: "/",
      text: "На главную",
      className: "form__link",
    }),
    registerBtn: Button({
      text: "Зарегистрироваться",
      type: "button",
      className: "form__button form__button_type_sign-up",
    }),
  });
};
