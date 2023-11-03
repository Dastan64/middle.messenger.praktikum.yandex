import Block from '../../core/Block.ts';
import { validateFormSubmit } from '../../utils/validateFormSubmit.ts';
import { EditProfileFormProps } from './types.ts';
import { tmpl } from './edit-profile-form-tmpl.ts';
import { UserController } from '../../controllers/UserController.ts';
import { ProfileData } from '../../types/types.ts';

export class EditProfileForm extends Block {
  constructor(props: EditProfileFormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          const data = validateFormSubmit(event.target as HTMLFormElement, this.children.inputs as Block[]);
          if (data) {
            UserController.changeProfile(data as unknown as ProfileData);
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
