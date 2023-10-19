import styles from './error.module.scss';
import Block from '../../core/Block.ts';
import { ErrorProps } from './types.ts';

export class Error extends Block {
  constructor(props: ErrorProps) {
    super('span', props);
  }

  init() {
    const element = this.element as HTMLSpanElement;
    element.className = styles.error;
  }

  render() {
    return this.compile('{{text}}');
  }
}
