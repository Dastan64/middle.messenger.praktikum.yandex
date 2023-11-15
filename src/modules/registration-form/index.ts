import Block from '../../core/Block.ts';
import { tmpl } from './registration-form.tmpl.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { RegistrationFormProps } from './types.ts';
import { AuthController } from '../../controllers/AuthController.ts';
import { SignUpData } from '../../types/types.ts';

export class RegistrationForm extends Block {
  constructor(props: RegistrationFormProps) {
    super({
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
          if (data) {
            AuthController.signup(data as unknown as SignUpData);
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
