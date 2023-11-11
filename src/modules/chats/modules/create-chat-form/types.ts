import Block from '../../../../core/Block.ts';

export interface CreateChatFormProps {
  inputs: Block[];
  onSubmit?: () => void;
  submitButton: Block;
}
