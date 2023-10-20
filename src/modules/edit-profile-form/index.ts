import Block from '../../core/Block.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { EditProfileFormProps } from './types.ts';
import { tmpl } from './edit-profile-form-tmpl.ts';

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
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmpl);
  }
}
