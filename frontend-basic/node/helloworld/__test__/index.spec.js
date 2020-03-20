test('测试hello world', () => {
  const helloworld = require('../index');
  // console.log('helloworld', helloworld);
  expect(helloworld).toBe('hello world');
})