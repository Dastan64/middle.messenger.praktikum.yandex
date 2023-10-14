import './input.scss';
import { InputProps } from './types.ts';
import Block from '../../core/Block.ts';
import { tmpl } from './input.tmpl.ts';

export class Input extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  init() {
    const element = this.element as HTMLInputElement;
    element.className = 'input-container';
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
