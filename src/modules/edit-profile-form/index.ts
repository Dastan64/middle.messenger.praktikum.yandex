import './edit-profile-form.scss';
import Block from '../../core/Block.ts';
import { tmpl } from './edit-profile-form.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { EditProfileFormProps } from './types.ts';

export class EditProfileForm extends Block {
  constructor(props: EditProfileFormProps) {
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
    element.className = 'profile-form';
    this.children.inputs = this.props.inputs;
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
  }

  render() {
    return this.compile(tmpl);
  }
}
