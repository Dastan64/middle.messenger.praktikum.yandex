import { ChatOptionsProps } from './types.ts';
import Block from '../../../../core/Block.ts';
import { tmpl } from './chat-options.tmpl.ts';

export class ChatOptions extends Block {
  constructor(props: ChatOptionsProps) {
    super(props);
  }

  init() {
    this.children.buttons = this.props.buttons;
  }

  render() {
    return this.compile(tmpl);
  }
}
