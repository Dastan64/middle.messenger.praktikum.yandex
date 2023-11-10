import Block from '../../../../core/Block.ts';
import { tmpl } from './chat-message-form-tmpl.ts';
import { ChatMessageFormProps } from './types.ts';
import { validateFormSubmit } from '../../../../utils/validateFormSubmit.ts';
import { MessagesController } from '../../../../controllers/MessagesController.ts';
import store from '../../../../core/Store.ts';

export class ChatMessageForm extends Block {
  constructor(props: ChatMessageFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const data = validateFormSubmit(target, this.children.input as Block[]);
          if (data) {
            const { message } = data;
            const chatId = store.getState().selectedChat?.[0].id;
            if (chatId) {
              MessagesController.sendMessage(chatId, message);
              target.reset();
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
