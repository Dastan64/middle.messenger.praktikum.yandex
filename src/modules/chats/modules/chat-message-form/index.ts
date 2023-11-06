import Block from '../../../../core/Block.ts';
import { tmpl } from './chat-message-form-tmpl.ts';
import { ChatMessageFormProps } from './types.ts';
import { validateFormSubmit } from '../../../../utils/validateFormSubmit.ts';

export class ChatMessageForm extends Block {
  constructor(props: ChatMessageFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          validateFormSubmit(event.target as HTMLFormElement, this.children.input as Block[]);
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
