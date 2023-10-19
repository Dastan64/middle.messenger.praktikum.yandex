import styles from './input.module.scss';
import { InputProps } from './types.ts';
import Block from '../../core/Block.ts';

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  init() {
    const element = this.element as HTMLInputElement;
    element.className = styles.input;
    if (this.props.isOutlined) {
      element.classList.add(styles.outlined);
    }
    if (this.props.type === 'file') {
      element.classList.add(styles.type_file);
    }
    if (this.props.name === 'message') {
      element.classList.add(styles.type_message);
    }
    element.type = this.props.type;
    element.name = this.props.name;
    if (this.props.placeholder) {
      element.placeholder = this.props.placeholder;
    }
    element.id = this.props.id;
  }

  render() {
    return this.compile('');
  }
}
