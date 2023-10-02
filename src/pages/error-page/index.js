import Handlebars from "handlebars";
import "./error-page.scss";
import { tmpl } from "./error-page.tmpl.js";
import { Link } from "../../components/link/index.js";

export const ErrorPage = ({ statusCode, message }) => {
  return Handlebars.compile(tmpl)({
    statusCode,
    message,
    mainPageLink: Link({
      to: "/",
      text: "На главную",
    }),
  });
};
