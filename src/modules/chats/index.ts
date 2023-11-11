// Core
import { tmpl } from './chats.tmpl.ts';
import Block from '../../core/Block.ts';
import { withStore } from '../../hocs/withStore.ts';
import { ChatsController } from '../../controllers/ChatsController.ts';
import { State } from '../../core/Store.ts';
import { Chat, Routes } from '../../types/types.ts';
import { MessagesController } from '../../controllers/MessagesController.ts';

// Components
import { ChatThumb } from './components/chat-thumb/index.ts';
import { MessagesWindow } from './components/messages-window/index.ts';
import { Button } from '../../components/button/index.ts';
import { ClosePopupButton } from '../../components/close-popup-button/index.ts';
import { DeleteUserPopup } from '../../components/popups/delete-user-popup/index.ts';
import { InputContainer } from '../../components/input-container/index.ts';
import { AddUserPopup } from '../../components/popups/add-user-popup/index.ts';
import { CreateChatPopup } from '../../components/popups/create-chat-popup/index.ts';
import { Input } from '../../components/input/index.ts';
import { OptionsButton } from '../../components/options-button/index.ts';
import { ChatOptions } from './components/chat-options/index.ts';
import { Avatar } from '../../components/avatar/index.ts';
import { Link } from '../../components/link/index.ts';

// Modules
import { CreateChatForm } from './modules/create-chat-form/index.ts';
import { ChatMessageForm } from './modules/chat-message-form/index.ts';
import { ManageUserForm } from './modules/manage-user-form/index.ts';

export class BaseChats extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.avatarLink = new Link({
      to: Routes.Profile,
      content: new Avatar({
        size: '48',
      }),
    });
    this.children.searchInput = new Input({
      placeholder: 'Поиск...',
      id: 'search',
      name: 'search',
      type: 'text',
    });
    this.children.messageForm = new ChatMessageForm({
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
        onSubmit: () => {
          this.setProps({
            isCreateChatPopupOpen: false,
          });
        },
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
              optionsVisible: false,
            });
          },
        },
      }),
      form: new ManageUserForm({
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
        onSubmit: (chatId: number, userId: number[]) => {
          ChatsController.addUserToChat(chatId, userId);
        },
        onClose: () => {
          this.setProps({
            isAddUserPopupOpen: false,
            optionsVisible: false,
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
              optionsVisible: false,
            });
          },
        },
      }),
      form: new ManageUserForm({
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
        onSubmit: (chatId: number, userId: number[]) => {
          ChatsController.deleteUserFromChat(chatId, userId);
        },
        onClose: () => {
          this.setProps({
            isDeleteUserPopupOpen: false,
            optionsVisible: false,
          });
        },
      }),
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
    this.children.options = new ChatOptions({
      buttons: [
        new Button({
          text: 'Добавить пользователя',
          type: 'button',
          events: {
            click: () => {
              this.setProps({
                isAddUserPopupOpen: true,
              });
            },
          },
        }),
        new Button({
          text: 'Удалить пользователя',
          type: 'button',
          events: {
            click: () => {
              this.setProps({
                isDeleteUserPopupOpen: true,
              });
            },
          },
        }),
        new Button({
          text: 'Удалить чат',
          type: 'button',
          events: {
            click: () => {
              ChatsController.deleteChat(this.props.selectedChat.id);
              this.setProps({
                optionsVisible: false,
              });
            },
          },
        }),
      ],
    });
    this.children.optionsButton = new OptionsButton({
      onClick: () => this.setProps({ optionsVisible: !this.props.optionsVisible }),
    });
  }

  componentDidUpdate() {
    if (this.props.chats) {
      this.children.chats = this.props.chats.map(
        (chat: Chat) => new ChatThumb({
          chat,
          onClick: (chatId: number) => {
            ChatsController.selectChat(chatId);
            MessagesController.findMessages(chatId);
            this.setProps({ optionsVisible: false });
          },
        }),
      );
    }

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
  selectedChat: state.selectedChat?.[0],
});

export const Chats = withStore(mapStateToProps)(BaseChats);
