import { tmpl } from './message.tmpl.ts';
import styles from './message.module.scss';
import Block from '../../../../core/Block.ts';
import { MessageProps } from './types.ts';

export class Message extends Block {
  constructor(props: MessageProps) {
    super('li', props);
  }

  init() {
    const element = this.element as HTMLLIElement;
    element.className = styles.message;
  }

  render() {
    return this.compile(tmpl);
  }
}
