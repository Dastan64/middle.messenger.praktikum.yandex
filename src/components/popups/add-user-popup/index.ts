import Block from '../../../core/Block.ts';
import { tmpl } from './add-user-popup.tmpl.ts';
import { AddUserPopupProps } from './types.ts';

export class AddUserPopup extends Block {
  constructor(props: AddUserPopupProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl);
  }
}
