export interface ButtonProps {
  className: string;
  events?: {
    click: () => void;
  };
  text: string;
  type: 'button' | 'submit';
}
