import Block from '../../core/Block.ts';
import { tmpl } from './edit-password-form-tmpl.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { EditPasswordFormProps } from './types.ts';

export class EditPasswordForm extends Block {
  constructor(props: EditPasswordFormProps) {
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
