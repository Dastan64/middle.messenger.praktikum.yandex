import Block from '../../../../core/Block.ts';
import { tmpl } from './delete-user-form.tmpl.ts';
import { DeleteUserFormProps } from './types.ts';
import { validateFormSubmit } from '../../../../utils/validateFormSubmit.ts';
import store from '../../../../core/Store.ts';
import { ChatsController } from '../../../../controllers/ChatsController.ts';

export class DeleteUserForm extends Block {
  constructor(props: DeleteUserFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);

          if (data) {
            const userId = data['user-id'].split(',').map((n) => +n);
            const chatId = store.getState().selectedChat;
            console.log(chatId, userId);
            if (chatId && userId) {
              ChatsController.deleteUserFromChat(chatId, userId);
              this.props.onClose();
            }
          }
        },
      },
    });
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmpl);
  }
}
