export interface InputProps {
  className?: string;
  events?: {
    blur?: (event: FocusEvent) => void;
  };
  id: string;
  isInvalid?: boolean;
  label: string;
  name: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
}
