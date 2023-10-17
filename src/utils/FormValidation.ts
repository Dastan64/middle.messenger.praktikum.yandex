export class FormValidation {
  validate(event: FocusEvent) {
    switch ((event.target as HTMLInputElement).type) {
      case 'text':
        console.log('Type text');
        if ((event.target as HTMLInputElement).value.length < 3) {
          return 'Логин должен состоять более чем из 3 букв';
        }
        break;
      case 'password':
        console.log('Type password');
        return '';
        break;
      default:
        break;
    }
    return '';
  }
}
