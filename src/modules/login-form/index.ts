import Block from '../../core/Block.ts';
import { tmpl } from './login-form-tmpl.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { LoginFormProps } from './types.ts';
import { SignInData } from '../../types/types.ts';
import { AuthController } from '../../controllers/AuthController.ts';

export class LoginForm extends Block {
  constructor(props: LoginFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
          if (data) {
            AuthController.signin(data as unknown as SignInData);
          }
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
