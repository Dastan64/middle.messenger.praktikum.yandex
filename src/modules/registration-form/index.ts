import Block from '../../core/Block.ts';
import { tmpl } from './registration-form.tmpl.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { RegistrationFormProps } from './types.ts';

export class RegistrationForm extends Block {
  constructor(props: RegistrationFormProps) {
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
