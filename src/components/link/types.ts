export interface LinkProps {
  className?: string;
  events?: {
    click: (event: Event) => void;
  };
  text: string;
  to: string;
}
