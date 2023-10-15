import { CustomRoundPipe } from './custom-round.pipe';

describe('CustomRoundPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomRoundPipe();
    expect(pipe).toBeTruthy();
  });
});
