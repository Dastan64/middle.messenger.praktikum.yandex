import styles from './close-popup-button.module.scss';
import Block from '../../core/Block.ts';
import { ClosePopupButtonProps } from './types.ts';

export class ClosePopupButton extends Block {
  constructor(props: ClosePopupButtonProps) {
    super(props);
  }

  render() {
    return this.compile(`<button type="button" class=${styles.button}></button>`);
  }
}
