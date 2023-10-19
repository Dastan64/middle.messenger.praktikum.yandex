import { tmpl } from './chats.tmpl.ts';
import Block from '../../core/Block.ts';
import { Link } from '../../components/link/index.ts';
import { Message } from './components/message/index.ts';
import { ChatMessageForm } from './modules/chat-message-form/index.ts';
import { Input } from '../../components/input/index.ts';
import { ChatThumb } from './components/chat-thumb/index.ts';
import avatar from '../../assets/images/avatar.jpeg';

export class Chats extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.profileLink = new Link({
      to: '/profile',
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

    this.children.chats = [
      new ChatThumb({
        url: '#',
        name: 'Джонни Депп',
        avatar,
        message: 'Привет, Дастан! Просто хотел предупредить',
        messagesNumber: 13,
        time: '13:45',
      }),
      new ChatThumb({
        url: '#',
        name: 'Эмбер Хёрд',
        avatar,
        message: 'Привет, Дастан!',
        messagesNumber: 13,
        time: '13:46',
      }),
    ];

    this.children.form = new ChatMessageForm({
      inputs: [
        new Input({
          placeholder: 'Написать сообщение...',
          name: 'message',
          id: 'message',
          type: 'text',
        }),
        new Input({
          name: 'file',
          id: 'file',
          type: 'file',
        }),
      ],
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
