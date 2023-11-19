import { expect } from 'chai';
import sinon from 'sinon';
import { Button } from './index.ts';

describe('Button component', () => {
  it('should be clickable', () => {
    const callback = sinon.stub();
    const button = new Button({
      text: 'button',
      type: 'button',
      events: {
        click: callback,
      },
    });

    const element = button.element as HTMLButtonElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });

  it('should have the text passed as an argument', () => {
    const button = new Button({
      text: 'button',
      type: 'button',
    });

    const element = button.element as HTMLButtonElement;
    expect(element.textContent).to.eq('button');
  });

  it('should have the type passed as an argument', () => {
    const button = new Button({
      text: 'button',
      type: 'submit',
    });

    const element = button.element as HTMLButtonElement;
    expect(element.type).to.eq('submit');
  });
});
