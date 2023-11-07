import { Chat } from '../../../../types/types.ts';

export interface ChatThumbProps {
  chat: Chat;
  events?: {
    click: () => void;
  };
  onClick?: (id: number) => void;
}
