import Handlebars from 'handlebars';
import { tmpl } from './button.tmpl.ts';
import './button.scss';
import { ButtonProps } from './types.ts';

export const Button = (props: ButtonProps): string => Handlebars.compile(tmpl)(props);
