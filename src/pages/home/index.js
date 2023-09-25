import Handlebars from "handlebars";
import { tmpl } from "./home.tmpl.js";

export const Home = () => {
  return Handlebars.compile(tmpl)({});
};
