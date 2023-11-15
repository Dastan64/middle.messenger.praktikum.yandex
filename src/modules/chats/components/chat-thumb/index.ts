import Block from '../../../../core/Block.ts';
import { ChatThumbProps } from './types.ts';
import { tmpl } from './chat-thumb-tmpl.ts';
import { formatTime } from '../../../../utils/formatTime.ts';

export class ChatThumb extends Block {
  constructor(props: ChatThumbProps) {
    super({
      ...props,
      chat: {
        ...props.chat,
        last_message: {
          ...props.chat.last_message,
          time: props.chat.last_message?.time ? formatTime(props.chat.last_message?.time) : '',
        },
      },
      events: {
        click: () => {
          this.props.onClick(this.props.chat.id);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
