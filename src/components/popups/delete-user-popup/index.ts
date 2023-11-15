import Block from '../../../core/Block.ts';
import { tmpl } from './delete-user-popup.tmpl.ts';
import { DeleteUserPopupProps } from './types.ts';

export class DeleteUserPopup extends Block {
  constructor(props: DeleteUserPopupProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl);
  }
}
