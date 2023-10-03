import Handlebars from 'handlebars';
import { tmpl } from './link.tmpl.ts';
import './link.scss';
import { LinkProps } from './types.ts';

export const Link = (props: LinkProps): string => Handlebars.compile(tmpl)(props);
