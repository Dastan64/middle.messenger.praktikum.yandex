import { Button } from '../../../../components/button/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { EditProfileForm } from '../../../../modules/edit-profile-form/index.ts';

import avatar from '../../../../assets/images/avatar.jpeg';
import Block from '../../../../core/Block.ts';
import { InputContainerProps } from '../../../../components/input-container/types.ts';
import { fields } from './edit-profile.fields.ts';
import { tmpl } from './edit-profile.tmpl.ts';

export class ChangeProfileData extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.avatar = new Avatar({
      url: avatar,
      username: 'Дастан Жамекешев',
    });

    this.children.editProfileForm = new EditProfileForm({
      inputs: fields.map((field) => new InputContainer(field as InputContainerProps)),
      submitButton: new Button({
        type: 'submit',
        text: 'Сохранить',
      }),
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
