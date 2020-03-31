
test('callback', done => {
  const { callback } = require('../index');

  callback();
  // 延迟一秒结束
  setTimeout(done, 1000);
});

test('promise', done => {
  const { promise } = require('../index');

  promise();
   // 延迟一秒结束
  setTimeout(done, 1000);
});

test('Generator', done => {
  const { generator } = require('../index');

  generator();
   // 延迟一秒结束
  setTimeout(done, 1000);
});

test('Async/Await', done => {
  const { asyncAwait } = require('../index');

  asyncAwait();
   // 延迟一秒结束
  setTimeout(done, 1000);
});

test('event', done => {
  const { event } = require('../index');

  event();
   // 延迟一秒结束
  setTimeout(done, 1000);
});