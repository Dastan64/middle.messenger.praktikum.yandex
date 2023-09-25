import Handlebars from "handlebars";
import { tmpl } from "./main.tmpl.js";

export const Main = () => {
  return Handlebars.compile(tmpl)({});
};
