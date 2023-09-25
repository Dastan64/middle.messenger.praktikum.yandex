import Handlebars from "handlebars";
import { tmpl } from "./error-page.tmpl.js";
import "../../../src/styles/shared/error-page.scss";
import { Link } from "../../components/link/index.js";

export const ErrorPage = () => {
  return Handlebars.compile(tmpl)({
    mainPageLink: Link({
      to: "/",
      text: "На главную",
      className: "error-page__link",
    }),
  });
};
