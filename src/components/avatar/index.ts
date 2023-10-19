import { AvatarProps } from './types.ts';
import Block from '../../core/Block.ts';
import { tmpl } from './avatar.tmpl.ts';

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl);
  }
}
