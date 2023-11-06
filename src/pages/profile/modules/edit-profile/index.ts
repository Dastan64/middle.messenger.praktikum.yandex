import { Button } from '../../../../components/button/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';
import { AvatarInput } from '../../../../components/avatar-input/index.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { EditProfileForm } from '../../../../modules/edit-profile-form/index.ts';

import avatar from '../../../../assets/images/avatar.jpeg';
import Block from '../../../../core/Block.ts';
import { InputContainerProps } from '../../../../components/input-container/types.ts';
import { fields } from './edit-profile.fields.ts';
import { tmpl } from './edit-profile.tmpl.ts';
import { UserController } from '../../../../controllers/UserController.ts';

export class ChangeProfileData extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.avatar = new Avatar({
      avatar,
      first_name: 'Дастан',
      second_name: 'Жамекешев',
    });

    this.children.avatarInput = new AvatarInput({
      avatar: new Avatar({
        avatar,
        first_name: 'Дастан',
        second_name: 'Жамекешев',
      }),
      events: {
        change: (event: Event) => {
          const formData = new FormData();
          const target = event.target as HTMLInputElement;
          console.log(target);
          if (target.files && target.files.length !== 0) {
            const file = target.files[0];
            formData.append('avatar', file);
            UserController.changeAvatar(formData);
          }
        },
      },
    });

    this.children.editProfileForm = new EditProfileForm({
      inputs: fields.map((field) => {
        return new InputContainer(field as InputContainerProps);
      }),
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
