import Handlebars from "handlebars";
import { tmpl } from "./change-password.tmpl.js";
import "./change-password.scss";

import { Button } from "../../../../components/button/index.js";
import { Input } from "../../../../components/input/index.js";
import { Avatar } from "../../../../components/avatar/index.js";

export const ChangePassword = () => {
  return Handlebars.compile(tmpl)({
    avatar: Avatar({}),
    fields: [
      {
        label: "Старый пароль:",
        for: "oldPassword",
        input: Input({
          className: "password__input",
          type: "password",
          name: "oldPassword",
          id: "oldPassword",
        }),
      },
      {
        label: "Новый пароль:",
        for: "newPassword",
        input: Input({
          className: "password__input",
          type: "password",
          name: "newPassword",
          id: "newPassword",
        }),
      },
    ],
    saveBtn: Button({
      type: "submit",
      className: "password__save-btn",
      text: "Сохранить",
    }),
  });
};
