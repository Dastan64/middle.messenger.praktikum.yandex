import { Button } from '../../../../components/button/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';
import { AvatarInput } from '../../../../components/avatar-input/index.ts';
import { InputContainer } from '../../../../components/input-container/index.ts';
import { EditProfileForm } from '../../../../modules/edit-profile-form/index.ts';
import Block from '../../../../core/Block.ts';
import { InputContainerProps } from '../../../../components/input-container/types.ts';
import { fields } from './edit-profile.fields.ts';
import { tmpl } from './edit-profile.tmpl.ts';
import { UserController } from '../../../../controllers/UserController.ts';
import store from '../../../../core/Store.ts';
import { UserInfo } from '../../../../types/types.ts';

export class ChangeProfileData extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.avatar = new Avatar({
      size: '130',
    });

    this.children.avatarInput = new AvatarInput({
      avatar: new Avatar({
        size: '130',
      }),
      events: {
        change: (event: Event) => {
          const formData = new FormData();
          const target = event.target as HTMLInputElement;
          if (target.files && target.files.length !== 0) {
            const file = target.files[0];
            formData.append('avatar', file);
            UserController.changeAvatar(formData);
          }
        },
      },
    });
    const mappedData = fields.map((field) => {
      const entry = Object.entries(store.getState().user as UserInfo).find((entry) => entry[0] === field.id);
      return {
        ...field,
        value: entry ? entry[1] : '',
      };
    });
    this.children.editProfileForm = new EditProfileForm({
      inputs: mappedData.map((field) => new InputContainer(field as InputContainerProps)),
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
