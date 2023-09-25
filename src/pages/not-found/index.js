import Handlebars from "handlebars";
import { tmpl } from "./not-found.tmpl.js";
import "../../../src/styles/shared/error-page.scss";

export const NotFound = () => {
  return Handlebars.compile(tmpl)({ text: "Упс, не туда попали" });
};
