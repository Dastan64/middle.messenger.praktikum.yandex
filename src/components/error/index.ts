import styles from './error.module.scss';
import Block from '../../core/Block.ts';
import { ErrorProps } from './types.ts';

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    return this.compile(`<span class=${styles.error}>{{text}}</span`);
  }
}
