import Handlebars from 'handlebars';
import { tmpl } from './chats.tmpl.ts';
import './chats.scss';
import { Link } from '../../components/link/index.ts';

export const Chats = (): string => Handlebars.compile(tmpl)({
  profileLink: Link({
    to: '/profile',
    className: 'chats__profile-link',
    text: 'Профиль',
  }),
});
