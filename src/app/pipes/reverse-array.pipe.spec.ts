import { ReverseArrayPipe } from './reverse-array.pipe';

describe('SortArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
