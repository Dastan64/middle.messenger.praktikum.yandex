export interface ButtonProps {
  events?: {
    click: () => void;
  };
  text: string;
  type: 'button' | 'submit';
}
