import Handlebars from "handlebars";
import { tmpl } from "./login.tmpl.js";
import "./login.scss";

export const Login = () => {
  return Handlebars.compile(tmpl)({});
};
