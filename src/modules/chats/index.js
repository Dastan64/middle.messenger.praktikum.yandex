import Handlebars from "handlebars";
import { tmpl } from "./chats.tmpl.js";
import "./chats.scss";

export const Chats = () => {
  return Handlebars.compile(tmpl)({});
};
