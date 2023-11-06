import { tmpl } from './message.tmpl.ts';
import Block from '../../../../core/Block.ts';
import { MessageProps } from './types.ts';

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl);
  }
}
