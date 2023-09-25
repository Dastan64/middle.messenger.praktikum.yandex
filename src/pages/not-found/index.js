import Handlebars from "handlebars";
import { tmpl } from "./not-found.tmpl.js";
import "./not-found.scss";

export const NotFound = () => {
  return Handlebars.compile(tmpl)({ text: "Упс, не туда попали" });
};
