import Handlebars from "handlebars";
import { tmpl } from "./button.tmpl.js";
import "./button.scss";

export const Button = (props) => {
  return Handlebars.compile(tmpl)(props);
};
