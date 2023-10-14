import './button.scss';
import { ButtonProps } from './types.ts';
import Block from '../../core/Block.ts';

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    const element = this.element as HTMLButtonElement;
    element.className = 'button';
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
    element.type = this.props.type;
  }

  render() {
    return this.compile('{{text}}', this.props);
  }
}
