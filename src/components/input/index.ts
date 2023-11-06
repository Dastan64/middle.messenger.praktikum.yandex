import styles from './input.module.scss';
import { InputProps } from './types.ts';
import Block from '../../core/Block.ts';
import { tmpl } from './input.tmpl.ts';

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  init() {
    const element = this.element as HTMLInputElement;
    console.log(element);
    if (this.props.isOutlined) {
      element.classList.add(styles.outlined);
    }
    if (this.props.type === 'file') {
      element.classList.add(styles.type_file);
    }
    if (this.props.name === 'message') {
      element.classList.add(styles.type_message);
    }
    if (this.props.name === 'search') {
      element.classList.add(styles.type_search);
    }
    if (this.props.placeholder) {
      element.placeholder = this.props.placeholder;
    }
  }

  render() {
    return this.compile(tmpl);
  }
}
