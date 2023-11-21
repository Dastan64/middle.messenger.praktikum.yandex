import { describe, it } from 'mocha';
import sinon from 'sinon';
import { expect } from 'chai';
import { Input } from './index.ts';
import '../../utils/registerHelpers.ts';

describe('Input component', () => {
  it('should fire callback on blur', () => {
    const callback = sinon.stub();
    const input = new Input({
      type: 'text',
      id: '123',
      name: '123',
      events: {
        blur: callback,
      },
    });

    const element = input.element as HTMLInputElement;

    element.blur();

    expect(callback.calledOnce).to.equal(true);
  });

  it('should have the type, id and name passed as an argument', () => {
    const input = new Input({
      type: 'text',
      id: '123',
      name: '123',
    });

    const element = input.element as HTMLInputElement;
    expect(element.type).to.eq('text');
    expect(element.id).to.eq('123');
    expect(element.name).to.eq('123');
  });
});
