import Handlebars from "handlebars";
import { tmpl } from "./profile.tmpl.js";

export const Profile = () => {
  return Handlebars.compile(tmpl)({});
};
