import Handlebars from "handlebars";
import { tmpl } from "./chats.tmpl.js";
import "./chats.scss";
import { Link } from "../../components/link/index.js";

export const Chats = () => {
  return Handlebars.compile(tmpl)({
    profileLink: Link({
      to: "/profile",
      className: "chats__profile-link",
      text: "Профиль",
    }),
  });
};
