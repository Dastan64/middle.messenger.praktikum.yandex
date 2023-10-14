import './input.scss';
import { InputProps } from './types.ts';
import Block from '../../core/Block.ts';

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  init() {
    const element = this.element as HTMLInputElement;
    element.classList.add(this.props.className);
    element.id = this.props.id;
    element.name = this.props.name;
    element!.type = this.props.type;
  }

  render() {
    return this.compile('', this.props);
  }
}
