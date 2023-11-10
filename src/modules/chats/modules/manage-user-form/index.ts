import Block from '../../../../core/Block.ts';
import { tmpl } from './manage-user-form.tmpl.ts';
import { validateFormSubmit } from '../../../../utils/validateFormSubmit.ts';
import { ManageUserFormProps } from './types.ts';
import store from '../../../../core/Store.ts';
import { ChatsController } from '../../../../controllers/ChatsController.ts';

export class ManageUserForm extends Block {
  constructor(props: ManageUserFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);

          if (data) {
            const userId = data['user-id'].split(',').map((n) => +n);
            const chatId = store.getState().selectedChat?.[0].id;
            if (chatId && userId) {
              ChatsController.addUserToChat(chatId, userId);
              this.props.onSubmit();
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
