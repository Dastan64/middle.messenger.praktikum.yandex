import { tmpl } from './chats.tmpl.ts';
import './chats.scss';
import Block from '../../core/Block.ts';
import { Link } from '../../components/link/index.ts';
import { Message } from './components/message/index.ts';

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

    this.children.messages = [
      new Message({
        text: 'Друзья, у меня для вас особенный выпуск новостей!',
        time: '23:45',
      }),
      new Message({
        text: 'Делись!',
        time: '23:46',
      }),
    ];
  }

  render() {
    return this.compile(tmpl);
  }
}
