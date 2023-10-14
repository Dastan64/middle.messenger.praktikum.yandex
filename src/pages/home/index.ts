import './home.scss';
import { Link } from '../../components/link/index.ts';
import Block from '../../core/Block.ts';
import { tmpl } from './home.tmpl.ts';

export class HomePage extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    const element = this.element as HTMLElement;
    element.className = 'main';

    this.children.profileLink = new Link({
      text: 'Взглянуть на профиль',
      to: '/profile',
    });

    this.children.chatsLink = new Link({
      text: 'К чатам',
      to: '/chats',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
