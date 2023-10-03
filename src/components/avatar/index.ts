import Handlebars from 'handlebars';
import { tmpl } from './avatar.tmpl.ts';
import './avatar.scss';
import { AvatarProps } from './types.ts';

export const Avatar = (props: AvatarProps): string => Handlebars.compile(tmpl)(props);
