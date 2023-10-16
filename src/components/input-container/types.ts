export interface InputContainerProps {
  events?: {
    blur?: (event: FocusEvent) => void;
    focus?: () => void;
  };
  id: string;
  label: string;
  name: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
}
