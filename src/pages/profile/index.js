import Handlebars from "handlebars";
import { tmpl } from "./profile.tmpl.js";
import "./profile.scss";
import { Link } from "../../components/link/index.js";
import { Avatar } from "../../components/avatar/index.js";

import avatar from "../../assets/images/avatar.jpeg";

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    avatar: Avatar({ url: avatar }),
    changeProfileDataLink: Link({
      to: "/change-profile-data",
      text: "Изменить данные",
      className: "profile__link",
    }),
    changePasswordLink: Link({
      to: "/change-password",
      text: "Изменить пароль",
      className: "profile__link",
    }),
  });
};
