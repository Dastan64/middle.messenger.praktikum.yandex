// Core
import { tmpl } from './chats.tmpl.ts';
import Block from '../../core/Block.ts';
import { withStore } from '../../hocs/withStore.ts';
import { ChatsController } from '../../controllers/ChatsController.ts';
import store, { State } from '../../core/Store.ts';
import { Chat } from '../../types/types.ts';

// Components
import { Input } from '../../components/input/index.ts';
import { Button } from '../../components/button/index.ts';
import { InputContainer } from '../../components/input-container/index.ts';
import { CreateChatPopup } from '../../components/popups/create-chat-popup/index.ts';
import { ChatThumb } from './components/chat-thumb/index.ts';
import { AddUserPopup } from '../../components/popups/add-user-popup/index.ts';
import { ClosePopupButton } from '../../components/close-popup-button/index.ts';
import { DeleteUserPopup } from '../../components/popups/delete-user-popup/index.ts';

// Modules
import { ChatMessageForm } from './modules/chat-message-form/index.ts';
import { CreateChatForm } from './modules/create-chat-form/index.ts';
import { AddUserForm } from './modules/add-user-form/index.ts';
import { DeleteUserForm } from './modules/delete-user-form/index.ts';
import { Avatar } from '../../components/avatar/index.ts';
import { MessagesController } from '../../controllers/MessagesController.ts';
import { MessagesWindow } from './components/messages-window';

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

    this.children.avatar = new Avatar({
      avatar: this.props.avatar,
      size: '48',
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

    this.children.createChatPopup = new CreateChatPopup({
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
      button: new ClosePopupButton({
        events: {
          click: () => {
            this.setProps({
              isCreateChatPopupOpen: false,
            });
          },
        },
      }),
    });
    this.children.addUserPopup = new AddUserPopup({
      button: new ClosePopupButton({
        events: {
          click: () => {
            this.setProps({
              isAddUserPopupOpen: false,
            });
          },
        },
      }),
      form: new AddUserForm({
        inputs: [
          new InputContainer({
            label: 'ID пользователя (если несколько, укажите через запятую)',
            name: 'user-id',
            id: 'user-id',
            type: 'text',
          }),
        ],
        submitButton: new Button({
          type: 'submit',
          text: 'Добавить',
        }),
        onClose: () => {
          this.setProps({
            isAddUserPopupOpen: false,
          });
        },
      }),
    });
    this.children.deleteUserPopup = new DeleteUserPopup({
      button: new ClosePopupButton({
        events: {
          click: () => {
            this.setProps({
              isDeleteUserPopupOpen: false,
            });
          },
        },
      }),
      form: new DeleteUserForm({
        inputs: [
          new InputContainer({
            label: 'ID пользователя (если несколько, укажите через запятую)',
            name: 'user-id',
            id: 'user-id',
            type: 'text',
          }),
        ],
        submitButton: new Button({
          type: 'submit',
          text: 'Удалить',
        }),
        onClose: () => {
          this.setProps({
            isDeleteUserPopupOpen: false,
          });
        },
      }),
    });

    this.children.addUserButton = new Button({
      text: 'Добавить пользователя',
      type: 'button',
      events: {
        click: () => {
          this.setProps({
            isAddUserPopupOpen: true,
          });
        },
      },
    });
    this.children.deleteUserButton = new Button({
      text: 'Удалить пользователя',
      type: 'button',
      events: {
        click: () => {
          this.setProps({
            isDeleteUserPopupOpen: true,
          });
        },
      },
    });

    this.children.createChatButton = new Button({
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

    this.children.messagesWindow = new MessagesWindow({});
  }

  componentDidUpdate() {
    this.children.chats = this.props.chats.map(
      (chat: Chat) => new ChatThumb({
        chat,
        onClick: (id: number) => {
          ChatsController.selectChat(id);
          MessagesController.findMessages(id);
          this.setProps({
            selectedChat: store.getState().chats?.find((chat) => chat.id === id),
          });
        },
      }),
    );

    return true;
  }

  componentDidMount() {
    ChatsController.getChatsList();
  }

  render() {
    return this.compile(tmpl);
  }
}

const mapStateToProps = (state: State) => ({
  chats: state.chats,
  avatar: state.user?.avatar,
  selectedChat: state.selectedChat,
  messages: state.messages,
  currentMessages: state.currentMessages,
});

export const Chats = withStore(mapStateToProps)(BaseChats);
