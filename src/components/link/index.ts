import { LinkProps } from './types.ts';
import Block from '../../core/Block.ts';
import router from '../../core/Router.ts';
import { tmpl } from './link.tmpl.ts';

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          router.go(this.props.to);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
