const listHelper = require('../utils/listHelper');

test('dummy returns 1', () => {
  const blogs = [];
  const result = listHelper.dummy(blogs);
  expect(results).toBe(1);
});