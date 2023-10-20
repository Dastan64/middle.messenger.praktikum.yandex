import Block from '../../../../core/Block.ts';
import { ChatThumbProps } from './types.ts';
import { tmpl } from './chat-thumb-tmpl.ts';

export class ChatThumb extends Block {
  constructor(props: ChatThumbProps) {
    super('li', props);
  }

  render() {
    return this.compile(tmpl);
  }
}
