import Block from '../../../../core/Block.ts';
import { tmpl } from './change-avatar-form.tmpl.ts';
import { ChangeAvatarFormProps } from './types.ts';

export class ChangeAvatarForm extends Block {
  constructor(props: ChangeAvatarFormProps) {
    super(props);
  }

  init() {
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tmpl);
  }
}
