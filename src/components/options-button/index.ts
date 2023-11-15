import Block from '../../core/Block.ts';
import styles from './options-button.module.scss';
import { OptionsButtonProps } from './types.ts';

export class OptionsButton extends Block {
  constructor(props: OptionsButtonProps) {
    super({
      ...props,
      events: {
        click: () => {
          this.props.onClick();
        },
      },
    });
  }

  render() {
    return this.compile(`<button class=${styles.button}></button>`);
  }
}
