import Handlebars from "handlebars";
import { tmpl } from "./not-found.tmpl.js";

export const NotFound = () => {
  return Handlebars.compile(tmpl)({ text: "Упс, не туда попали" });
};
