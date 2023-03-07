const hwwPages = require('..')

// TODO: Implement module test
test('hww-pages', () => {
  expect(hwwPages('w')).toBe('w@zce.me')
  expect(hwwPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => hwwPages(100)).toThrow('Expected a string, got number')
})
