import { expect } from 'chai';
import { describe } from 'mocha';
import { set } from './set.ts';
import { formatTime } from './formatTime.ts';

describe('set function', () => {
  it('should return object argument if passed object is not an real object', () => {
    const notAnObject = null;

    expect(set(notAnObject, '', '1')).to.equal(notAnObject);
  });

  it('should throw an error if path param is not a string', () => {
    const path = 123;
    const obj = {};

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const fn = () => set(obj, path, 123);

    expect(fn).to.throw(Error);
  });

  it('should set value by path', () => {
    const obj = { a: 123, b: { a: 345 } };
    const path = 'b.a';
    const value = 123;

    const result = set(obj, path, value);

    expect(result).to.have.nested.property(path).that.equals(value);
  });

  it('should mutate original object', () => {
    const obj = { a: 123, b: { a: 345 } };
    const path = 'b.a';
    const value = 123;

    const result = set(obj, path, value);

    expect(result).to.equal(obj);
  });
});

describe('formatTime function', () => {
  it('should format time', () => {
    const datetime = '2024-12-02T23:59:59';
    const result = formatTime(datetime);

    expect(result).to.equal('23:59');
  });

  it('should return string', () => {
    const datetime = '2024-12-02T23:59:59';
    const result = formatTime(datetime);

    expect(result).to.be.a('string');
  });

  it('should return Invalid Date when no datetime is passed', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = formatTime();
    expect(result).to.equal('Invalid Date');
  });
});
