import './error-page.scss';
import { Link } from '../../components/link/index.ts';
import Block from '../../core/Block.ts';
import { ErrorPageProps } from './types.ts';

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super('main', props);
  }

  init() {
    this.children.mainPageLink = new Link({
      text: 'На главную',
      to: '/',
    });
  }

  render() {
    return this.compile(
      `
    <section class="error-page">
        <h1 class="error-page__title">{{statusCode}}</h1>
        <p class="error-page__message">{{message}}</p>
        <div class="error-page__link-container">
            {{{mainPageLink}}}
        </div>
    </section>
    `,
      this.props,
    );
  }
}
