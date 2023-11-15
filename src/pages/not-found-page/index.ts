import Block from '../../core/Block.ts';
import { tmpl } from './not-found-page.tmpl.ts';
import { Link } from '../../components/link/index.ts';
import { Routes } from '../../types/types.ts';

export class NotFoundPage extends Block {
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
