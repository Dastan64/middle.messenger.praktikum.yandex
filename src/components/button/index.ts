import styles from './button.module.scss';
import { ButtonProps } from './types.ts';
import Block from '../../core/Block.ts';

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(`<button class=${styles.button} type="{{type}}">{{text}}</button>`);
  }
}
