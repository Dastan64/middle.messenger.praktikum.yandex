import Handlebars from "handlebars";
import { tmpl } from "./not-found.tmpl.js";
import "../../../src/styles/shared/error-page.scss";
import { Link } from "../../components/link/index.js";

export const NotFound = () => {
  return Handlebars.compile(tmpl)({
    mainPageLink: Link({
      to: "/",
      text: "На главную",
      className: "error-page__link",
    }),
  });
};
