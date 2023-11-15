import Block from '../../../core/Block.ts';
import { ChangeChatAvatarPopupProps } from './types.ts';
import { tmpl } from './change-chat-avatar-popup.tmpl.ts';

export class ChangeChatAvatarPopup extends Block {
  constructor(props: ChangeChatAvatarPopupProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl);
  }
}
