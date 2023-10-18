import { tmpl } from './chats.tmpl.ts';
import './chats.scss';
import Block from '../../core/Block.ts';
import { Link } from '../../components/link/index.ts';
import { Message } from './components/message/index.ts';
import { ChatMessageForm } from './modules/chat-message-form';
import { Input } from '../../components/input';

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

    this.children.form = new ChatMessageForm({
      className: 'chat-message-form',
      inputs: [
        new Input({
          className: 'message-input',
          name: 'message',
          id: 'message',
          label: 'Написать сообщение...',
          type: 'text',
        }),
        new Input({
          className: 'file-input',
          name: 'file',
          id: 'file',
          label: 'Прикрепить файлы',
          type: 'file',
        }),
      ],
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
