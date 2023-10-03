import Handlebars from 'handlebars';
import './error-page.scss';
import { tmpl } from './error-page.tmpl.ts';
import { Link } from '../../components/link/index.ts';
import { ErrorPageProps } from './types.ts';

export const ErrorPage = ({ message, statusCode }: ErrorPageProps): string => Handlebars.compile(tmpl)({
  statusCode,
  message,
  mainPageLink: Link({
    to: '/',
    text: 'На главную',
  }),
});
