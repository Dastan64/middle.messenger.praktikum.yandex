import Handlebars from "handlebars";
import { tmpl } from "./error-page.tmpl.js";
import "../../../src/styles/shared/error-page.scss";

export const ErrorPage = () => {
  return Handlebars.compile(tmpl)({});
};
