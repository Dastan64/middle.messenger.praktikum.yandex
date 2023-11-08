import { tmpl } from './chats.tmpl.ts';
import Block from '../../core/Block.ts';
import { ChatMessageForm } from './modules/chat-message-form/index.ts';
import { Input } from '../../components/input/index.ts';
import { Button } from '../../components/button/index.ts';
import { CreateChatForm } from './modules/create-chat-form/index.ts';
import { InputContainer } from '../../components/input-container/index.ts';
import { CreateChatPopup } from '../../components/popups/create-chat-popup/index.ts';
import { withStore } from '../../hocs/withStore.ts';
import store, { State } from '../../core/Store.ts';
import { ChatsController } from '../../controllers/ChatsController.ts';
import { ChatThumb } from './components/chat-thumb/index.ts';
import { Chat } from '../../types/types.ts';
import { AddUserPopup } from '../../components/popups/add-user-popup/index.ts';
import { ClosePopupButton } from '../../components/close-popup-button';
import { DeleteUserPopup } from '../../components/popups/delete-user-popup';

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
      input: new Input({
        id: 'add-user-to-chat',
        name: 'add-user-to-chat',
        type: 'text',
        placeholder: 'ID пользователя',
      }),
      submitButton: new Button({
        text: 'Добавить',
        type: 'button',
        events: {
          click: () => {
            console.log('Add');
          },
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
      input: new Input({
        id: 'delete-user-from-chat',
        name: 'delete-user-from-chat',
        type: 'text',
        placeholder: 'ID пользователя',
      }),
      submitButton: new Button({
        text: 'Удалить',
        type: 'button',
        events: {
          click: () => {
            console.log('Delete');
          },
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
  }

  componentDidUpdate() {
    this.children.chats = this.props.chats.map((chat: Chat) => {
      return new ChatThumb({
        chat,
        onClick: (id: number) => {
          ChatsController.selectChat(id);
          this.setProps({
            selectedChat: store.getState().chats?.find((chat) => {
              return chat.id === id;
            }),
          });
        },
      });
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
    selectedChat: state.selectedChat,
  };
};

export const Chats = withStore(mapStateToProps)(BaseChats);
