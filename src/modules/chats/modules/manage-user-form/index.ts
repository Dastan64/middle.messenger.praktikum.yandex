import Block from '../../../../core/Block.ts';
import { tmpl } from './manage-user-form.tmpl.ts';
import { validateFormSubmit } from '../../../../utils/validateFormSubmit.ts';
import { ManageUserFormProps } from './types.ts';
import store from '../../../../core/Store.ts';

export class ManageUserForm extends Block {
  constructor(props: ManageUserFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const data = validateFormSubmit(target, this.children.inputs as Block[]);

          if (data) {
            const userId = data['user-id'].split(',').map((n) => +n);
            const chatId = store.getState().selectedChat?.[0].id;
            if (chatId && userId) {
              this.props.onSubmit(chatId, userId);
              target.reset();
              this.setProps({
                success: true,
              });
              setTimeout(() => {
                this.props.onClose();
              }, 1000);
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
