import Block from '../../../../core/Block.ts';

export interface AddUserFormProps {
  inputs: Block[];
  onClose?: () => void;
  submitButton: Block;
}
