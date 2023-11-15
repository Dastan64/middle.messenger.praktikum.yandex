import Block from '../../core/Block.ts';
import { tmpl } from './file-input.tmpl.ts';
import { FileInputProps } from './types.ts';

export class FileInput extends Block {
  constructor(props: FileInputProps) {
    super({
      ...props,
      events: {
        change: (event: Event) => {
          if (this.props.onChange) {
            this.props.onChange(event);
          }
        },
      },
    });
  }

  render() {
    return this.compile(tmpl);
  }
}
