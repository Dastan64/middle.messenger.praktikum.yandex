import styles from './avatar-input.module.scss';
import Block from '../../core/Block.ts';
import { tmpl } from './avatar-input.tmpl.ts';
import { AvatarInputProps } from './types.ts';

export class AvatarInput extends Block {
  constructor(props: AvatarInputProps) {
    super('div', props);
  }

  init() {
    const element = this.element as HTMLDivElement;
    element.className = styles.container;
  }

  render() {
    return this.compile(tmpl);
  }
}
