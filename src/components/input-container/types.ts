export interface InputContainerProps {
  className?: string;
  id: string;
  isOutlined?: boolean;
  label: string;
  name: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
}
