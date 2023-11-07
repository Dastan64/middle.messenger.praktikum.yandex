import Block from '../../../../core/Block.ts';
import { ChatThumbProps } from './types.ts';
import { tmpl } from './chat-thumb-tmpl.ts';

export class ChatThumb extends Block {
  constructor(props: ChatThumbProps) {
    super({
      ...props,
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
