import { tmpl } from './chats.tmpl.ts';
import Block from '../../core/Block.ts';
import { ChatMessageForm } from './modules/chat-message-form/index.ts';
import { Input } from '../../components/input/index.ts';
import { Button } from '../../components/button/index.ts';
import { CreateChatForm } from './modules/create-chat-form/index.ts';
import { InputContainer } from '../../components/input-container/index.ts';
import { CreateChatPopup } from '../../components/popups/create-chat-popup/index.ts';
import { withStore } from '../../hocs/withStore.ts';
import { State } from '../../core/Store.ts';
import { ChatsController } from '../../controllers/ChatsController.ts';
import { ChatThumb } from './components/chat-thumb/index.ts';
import { Chat } from '../../types/types.ts';

export class BaseChats extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.input = new Input({
      placeholder: 'Поиск...',
      id: 'search',
      name: 'search',
      type: 'text',
    });

    this.children.chats = [];

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

    this.children.popup = new CreateChatPopup({
      form: new CreateChatForm({
        inputs: [
          new InputContainer({
            label: 'Название чата',
            name: 'new-chat',
            id: 'new-chat',
            type: 'text',
          }),
        ],
        submitButton: new Button({
          type: 'submit',
          text: 'Создать',
        }),
      }),
      button: new Button({
        type: 'button',
        text: 'Закрыть',
        events: {
          click: () => {
            this.setProps({
              isCreateChatPopupOpen: false,
            });
          },
        },
      }),
    });

    this.children.button = new Button({
      text: 'Создать чат',
      type: 'button',
      events: {
        click: () => {
          this.setProps({
            isCreateChatPopupOpen: true,
          });
        },
      },
    });
  }

  componentDidUpdate() {
    this.children.chats = this.props.chats.map((chat: Chat) => {
      return new ChatThumb({ chat });
    });
    return true;
  }

  componentDidMount() {
    ChatsController.getChatsList();
  }

  render() {
    return this.compile(tmpl);
  }
}

const mapStateToProps = (state: State) => {
  return {
    chats: state.chats,
  };
};

export const Chats = withStore(mapStateToProps)(BaseChats);
