import './change-profile-data.scss';

import { Button } from '../../../../components/button/index.ts';
import { Input } from '../../../../components/input/index.ts';
import { Avatar } from '../../../../components/avatar/index.ts';

import avatar from '../../../../assets/images/avatar.jpeg';
import Block from '../../../../core/Block.ts';

export class ChangeProfileData extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.avatar = new Avatar({
      url: avatar,
    });

    this.children.changeAvatarButton = new Button({
      type: 'button',
      className: 'data__change-avatar-btn',
      text: 'Изменить фото профиля',
    });

    this.children.fields = [
      new Input({
        className: 'data__input',
        type: 'text',
        name: 'login',
        id: 'login',
        label: 'Новый пароль',
      }),
      new Input({
        className: 'data__input',
        type: 'password',
        name: 'password',
        id: 'password',
        label: 'Подтвердите пароль',
      }),
    ];

    this.children.saveBtn = new Button({
      type: 'submit',
      className: 'data__save-btn',
      text: 'Сохранить',
    });
  }

  render() {
    return this.compile(
      `
      <section class="data">
        {{{avatar}}}
        <input class="data__avatar-input" type="file" name="avatar">
        {{{changeAvatarButton}}}
        <form class="data__form">
            {{#each fields}}
<!--                <div class="data__input-container">-->
<!--                    <label for="{{for}}" class="data__label">{{label}}</label>-->
                    {{{this}}}
<!--                </div>-->
            {{/each}}

            {{{saveBtn}}}
        </form>
      </section>
    `,
    );
  }
}
