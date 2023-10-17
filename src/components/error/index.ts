import Block from '../../core/Block.ts';
import './error.scss';
import { tmpl } from './error.tmpl.ts';
import { ErrorProps } from './types.ts';

export class Error extends Block {
  constructor(props: ErrorProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl);
  }
}
