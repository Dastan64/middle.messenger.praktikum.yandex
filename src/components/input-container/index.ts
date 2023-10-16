import './input-container.scss';
import Block from '../../core/Block.ts';
import { Input } from '../input/index.ts';
import { InputContainerProps } from './types.ts';
import { FormValidation } from '../../utils/FormValidation.ts';

export class InputContainer extends Block {
  constructor(props: InputContainerProps) {
    super('div', props);
  }

  init() {
    const validation = new FormValidation();
    this.children.input = new Input({
      className: this.props.className ?? '',
      id: this.props.id,
      name: this.props.name,
      type: this.props.type,
      label: this.props.label,
      events: {
        blur: validation.validate.bind(validation),
      },
    });

    const element = this.element as HTMLDivElement;
    element.className = 'input-container';
  }

  render() {
    return this.compile(`
      <label class="label" for="{{id}}">{{label}}</label>
      {{{input}}}
    `);
  }
}
