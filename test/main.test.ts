import { main } from '../src/main';

describe('This is test sample', () => {
  const consoleSpy = vi.spyOn(console, 'log');
  test('console.log', () => {
    main();
    expect(console.log).toHaveBeenCalled();
  });
});
