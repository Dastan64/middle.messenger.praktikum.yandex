import Handlebars from "handlebars";
import { tmpl } from "./register.tmpl.js";
import "./register.scss";

export const Register = () => {
  return Handlebars.compile(tmpl)({});
};
