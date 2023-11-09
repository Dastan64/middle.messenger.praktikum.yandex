import { Link } from '../../components/link/index.ts';
import Block from '../../core/Block.ts';
import { ErrorPageProps } from './types.ts';
import { tmpl } from './error-page.tmpl.ts';
import { Routes } from '../../types/types.ts';

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super(props);
  }

  init() {
    this.children.mainPageLink = new Link({
      text: 'На главную',
      to: Routes.Login,
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
