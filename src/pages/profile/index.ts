import './profile.scss';

import { Link } from '../../components/link/index.ts';
import { Avatar } from '../../components/avatar/index.ts';

import avatar from '../../assets/images/avatar.jpeg';
import Block from '../../core/Block.ts';

export class Profile extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.avatar = new Avatar({
      url: avatar,
      username: 'Дастан Жамекешев',
    });
    this.children.changeProfileDataLink = new Link({
      to: '/change-profile-data',
      text: 'Изменить данные',
      className: 'profile__link',
    });
    this.children.changePasswordLink = new Link({
      to: '/change-password',
      text: 'Изменить пароль',
      className: 'profile__link',
    });
  }

  render() {
    return this.compile(
      `
      <section class="profile">
        <div class="wrapper">
            {{{avatar}}}

            <div class="profile__info info">
                <div class="info__line">
                    <span class="info__role">Логин</span>
                    <span class="info__value">@dastan64</span>
                </div>

                <div class="info__line">
                    <span class="info__role">E-mail</span>
                    <span class="info__value">dastanz64@yandex.kz</span>
                </div>

                <div class="info__line">
                    <span class="info__role">Имя</span>
                    <span class="info__value">Дастан</span>
                </div>

                <div class="info__line">
                    <span class="info__role">Фамилия</span>
                    <span class="info__value">Жамекешев</span>
                </div>

                <div class="info__line">
                    <span class="info__role">Имя в чате</span>
                    <span class="info__value">Dastan Z</span>
                </div>

                <div class="info__line">
                    <span class="info__role">Телефон</span>
                    <span class="info__value">+7-123-456-78-90</span>
                </div>
            </div>
            <div class="profile__links">
                {{{changeProfileDataLink}}}
                {{{changePasswordLink}}}
            </div>
        </div>
    </section>
    `,
    );
  }
}
