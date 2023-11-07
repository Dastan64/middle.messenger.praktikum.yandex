import styles from './link.module.scss';
import { LinkProps } from './types.ts';
import Block from '../../core/Block.ts';

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  protected componentDidMount() {
    console.log('Link component mount');
  }

  render() {
    return this.compile(`<a className="${styles.link} {{className}}" href={{to}}>{{text}}</a>`);
  }
}
