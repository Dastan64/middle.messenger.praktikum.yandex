import Handlebars from 'handlebars';
import { tmpl } from './input.tmpl.js';
import './input.scss';

export const Input = (props) => {
    return Handlebars.compile(tmpl)(props);
};
