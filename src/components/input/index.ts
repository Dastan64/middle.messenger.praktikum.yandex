import './input.scss';
import { InputProps } from './types.ts';
import Block from '../../core/Block.ts';

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  get isValid(): boolean {
    const element = this.element as HTMLInputElement;
    return element.value.length > 2;
  }

  init() {
    const element = this.element as HTMLInputElement;
    element.className = 'input';
    element.type = this.props.type;
    element.name = this.props.name;
    element.id = this.props.id;
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
  }

  render() {
    return this.compile('');
  }
}
