import Block from '../../core/Block.ts';

export interface AvatarInputProps {
  avatar: Block;
  events?: {
    change: (event: Event) => void;
  };
}
