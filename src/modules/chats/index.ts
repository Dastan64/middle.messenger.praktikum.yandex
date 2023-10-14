import { tmpl } from './chats.tmpl.ts';
import './chats.scss';
import { Link } from '../../components/link/index.ts';
import Block from '../../core/Block.ts';

export class Chats extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.profileLink = new Link({
      to: '/profile',
      className: 'chats__profile-link',
      text: 'Профиль',
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
