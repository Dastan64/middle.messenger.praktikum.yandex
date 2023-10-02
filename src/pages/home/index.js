import Handlebars from "handlebars";
import { tmpl } from "./home.tmpl.js";
import "./home.scss";
import { Link } from "../../components/link/index.js";

export const Home = () => {
  return Handlebars.compile(tmpl)({
    profileLink: Link({
      to: "/profile",
      text: "Взглянуть на профиль",
      className: "main__link",
    }),
    chatsLink: Link({
      to: "/chats",
      text: "К чатам",
      className: "main__link",
    }),
  });
};
