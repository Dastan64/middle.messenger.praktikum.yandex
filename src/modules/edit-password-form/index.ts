import './edit-password-form.scss';
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
    const element = this.element as HTMLFormElement;
    element.className = 'password-form';
    this.children.inputs = this.props.inputs;
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
  }

  render() {
    return this.compile(tmpl);
  }
}
