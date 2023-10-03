import Handlebars from 'handlebars';
import { tmpl } from './input.tmpl.ts';
import './input.scss';
import { InputProps } from './types.ts';

export const Input = (props: InputProps): string => Handlebars.compile(tmpl)(props);
