import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Input } from './index.ts';
import '../../utils/registerHelpers.ts';

describe('Input component', () => {
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
