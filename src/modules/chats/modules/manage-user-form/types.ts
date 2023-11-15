import Block from '../../../../core/Block.ts';

export interface ManageUserFormProps {
  inputs: Block[];
  onClose: () => void;
  onSubmit?: (chatId: number, userId: number[]) => void;
  submitButton: Block;
}
