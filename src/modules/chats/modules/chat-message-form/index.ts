import Block from '../../../../core/Block.ts';
import './chat-message-form.scss';
import { tmpl } from './chat-message-form-tmpl.ts';
import { ChatMessageFormProps } from './types.ts';
import { validateFormSubmit } from '../../../../utils/validateFormSubmit.ts';

export class ChatMessageForm extends Block {
  constructor(props: ChatMessageFormProps) {
    super('form', {
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
    const element = this.element as HTMLFormElement;
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmpl);
  }
}
