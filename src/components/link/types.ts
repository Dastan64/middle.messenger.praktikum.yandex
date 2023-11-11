import Block from '../../core/Block.ts';

export interface LinkProps {
  content?: Block;
  events?: {
    click: (event: Event) => void;
  };
  text?: string;
  to: string;
}
