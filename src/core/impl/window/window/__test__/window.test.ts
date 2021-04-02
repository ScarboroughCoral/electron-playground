import { YBCWindowImpl } from '../window'
test('adds 1 + 2 to equal 3', () => {
    const windowInstance = new YBCWindowImpl();
    expect(windowInstance.sum(1, 2)).toBe(3);
});