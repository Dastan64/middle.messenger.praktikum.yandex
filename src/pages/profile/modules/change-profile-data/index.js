import Handlebars from "handlebars";
import { tmpl } from "./change-profile-data.tmpl.js";
import "./change-profile-data.scss";

import { Button } from "../../../../components/button/index.js";
import { Input } from "../../../../components/input/index.js";
import { Avatar } from "../../../../components/avatar/index.js";

export const ChangeProfileData = () => {
  return Handlebars.compile(tmpl)({
    avatar: Avatar({}),
    changeAvatarButton: Button({
      type: "button",
      className: "data__change-avatar-btn",
      text: "Изменить фото профиля",
    }),
    fields: [
      {
        label: "Логин:",
        for: "login",
        input: Input({
          className: "data__input",
          type: "text",
          name: "login",
          id: "login",
        }),
      },
      {
        label: "E-mail:",
        for: "email",
        input: Input({
          className: "data__input",
          type: "email",
          name: "email",
          id: "email",
        }),
      },
      {
        label: "Имя:",
        for: "first_name",
        input: Input({
          className: "data__input",
          type: "text",
          name: "first_name",
          id: "first_name",
        }),
      },
      {
        label: "Фамилия:",
        for: "second_name",
        input: Input({
          className: "data__input",
          type: "text",
          name: "second_name",
          id: "second_name",
        }),
      },
      {
        label: "Номер телефона:",
        for: "phone",
        input: Input({
          className: "data__input",
          type: "tel",
          name: "phone",
          id: "phone",
        }),
      },
      {
        label: "Имя в чате:",
        for: "display_name",
        input: Input({
          className: "data__input",
          type: "text",
          name: "display_name",
          id: "display_name",
        }),
      },
    ],
    saveBtn: Button({
      type: "submit",
      className: "data__save-btn",
      text: "Сохранить",
    }),
  });
};
