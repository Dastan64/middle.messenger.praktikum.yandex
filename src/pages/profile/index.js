import Handlebars from "handlebars";
import { tmpl } from "./profile.tmpl.js";
import "./profile.scss";

export const Profile = () => {
  return Handlebars.compile(tmpl)({});
};
