import { Link } from '../../components/link/index.ts';
import Block from '../../core/Block.ts';
import { tmpl } from './error-page.tmpl.ts';
import { Routes } from '../../types/types.ts';

export class ErrorPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.link = new Link({
      text: 'К чатам',
      to: Routes.Chats,
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
