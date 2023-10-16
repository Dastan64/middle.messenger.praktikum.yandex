export class FormValidation {
  validate(event: FocusEvent) {
    switch ((event.target as HTMLInputElement).type) {
      case 'text':
        console.log('Type text');
        break;
      case 'password':
        console.log('Type password');
        break;
      default:
        break;
    }
  }
}
