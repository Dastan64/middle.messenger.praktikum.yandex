import Block from '../../core/Block.ts';
import { tmpl } from './login-form-tmpl.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { LoginFormProps } from './types.ts';

export class LoginForm extends Block {
  constructor(props: LoginFormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
        },
      },
    });
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmpl);
  }
}
