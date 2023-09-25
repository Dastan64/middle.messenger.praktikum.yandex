import Handlebars from "handlebars";
import { tmpl } from "./home.tmpl.js";
import "./home.scss";

export const Home = () => {
  return Handlebars.compile(tmpl)({});
};
