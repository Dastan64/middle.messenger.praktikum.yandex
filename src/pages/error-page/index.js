import Handlebars from "handlebars";
import { tmpl } from "./error-page.tmpl.js";

export const ErrorPage = () => {
  return Handlebars.compile(tmpl)({});
};
