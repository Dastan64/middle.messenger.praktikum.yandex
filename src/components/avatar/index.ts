import './avatar.scss';
import { AvatarProps } from './types.ts';
import Block from '../../core/Block.ts';

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  init() {
    const element = this.element as HTMLDivElement;
    element.className = 'user';
  }

  render() {
    return this.compile(
      `
      <div class="user__avatar-container">
          <img width="130" height="130" src="{{url}}" alt="Фото профиля" class="user__avatar">
      </div>
      <h1 class="user__name">{{username}}</h1>
    `,
    );
  }
}
