import Handlebars from "handlebars";
import { tmpl } from "./avatar.tmpl.js";
import "./avatar.scss";

export const Avatar = (props) => {
  return Handlebars.compile(tmpl)(props);
};
