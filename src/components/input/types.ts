export interface InputProps {
  className?: string;
  id: string;
  label: string;
  name: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
}
