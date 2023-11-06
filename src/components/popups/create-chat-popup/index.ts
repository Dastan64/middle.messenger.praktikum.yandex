import Block from '../../../core/Block.ts';
import { tmpl } from './create-chat-popup.tmpl.ts';
import { CreateChatPopupProps } from './types.ts';

export class CreateChatPopup extends Block {
  constructor(props: CreateChatPopupProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl);
  }
}
