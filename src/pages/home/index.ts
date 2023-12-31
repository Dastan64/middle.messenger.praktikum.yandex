import { Link } from '../../components/link/index.ts';
import Block from '../../core/Block.ts';
import { tmpl } from './home.tmpl.ts';
import { links } from './home.links.ts';

export class HomePage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.links = links.map((link) => new Link(link));
  }

  render() {
    return this.compile(tmpl);
  }
}
