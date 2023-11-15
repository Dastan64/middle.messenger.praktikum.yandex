import Block from '../../../../core/Block.ts';
import { tmpl } from './create-chat-form.tmpl.ts';
import { validateFormSubmit } from '../../../../utils/validateFormSubmit.ts';
import { CreateChatFormProps } from './types.ts';
import { ChatsController } from '../../../../controllers/ChatsController.ts';

export class CreateChatForm extends Block {
  constructor(props: CreateChatFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);

          if (data) {
            const title = data['new-chat'];
            ChatsController.create(title);
            this.props.onSubmit();
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
