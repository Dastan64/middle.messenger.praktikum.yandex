import Block from '../../core/Block.ts';
import { Input } from '../input/index.ts';
import { Error } from '../error/index.ts';
import { InputContainerProps } from './types.ts';
import { validate } from '../../utils/validate.ts';
import { tmpl } from './input-container-tmpl.ts';

export class InputContainer extends Block {
  constructor(props: InputContainerProps) {
    super(props);
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
          (this.children.error as Block).setProps({
            text: errors[this.props.name],
          });
        },
      },
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
