import { DynamicClassPipe } from './dynamic-class.pipe';

describe('DynamicClassPipe', () => {
  it('create an instance', () => {
    const pipe = new DynamicClassPipe();
    expect(pipe).toBeTruthy();
  });
});
