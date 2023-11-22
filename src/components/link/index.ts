import { LinkProps } from './types.ts';
import Block from '../../core/Block.ts';
import { Router } from '../../core/Router.ts';
import { tmpl } from './link.tmpl.ts';

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          Router.getInstance().go(this.props.to);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
