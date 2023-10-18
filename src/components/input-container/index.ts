import './input-container.scss';
import Block from '../../core/Block.ts';
import { Input } from '../input/index.ts';
import { Error } from '../error/index.ts';
import { InputContainerProps } from './types.ts';
import { validate } from '../../utils/validate.ts';

export class InputContainer extends Block {
  constructor(props: InputContainerProps) {
    super('div', props);
  }

  init() {
    this.children.error = new Error({
      text: '',
    });
    this.children.input = new Input({
      ...this.props,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const errors = validate({
            [this.props.name]: target.value,
          });
          console.log(errors);
          (this.children.error as Block).setProps({
            text: errors[this.props.name],
          });
        },
      },
    });

    const element = this.element as HTMLDivElement;
    element.className = 'input-container';
    element.dataset.name = this.props.name;
  }

  render() {
    return this.compile(`
      <label class="label" for="{{id}}">{{label}}</label>
      {{{input}}}
      {{{error}}}
    `);
  }
}
