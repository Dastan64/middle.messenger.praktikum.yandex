import Block from '../../../../core/Block.ts';

export interface DeleteUserFormProps {
  inputs: Block[];
  onClose?: () => void;
  submitButton: Block;
}
