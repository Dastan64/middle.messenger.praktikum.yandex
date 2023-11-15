import Block from '../../core/Block.ts';
import { tmpl } from './avatar-input.tmpl.ts';
import { AvatarInputProps } from './types.ts';

export class AvatarInput extends Block {
  constructor(props: AvatarInputProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl);
  }
}
