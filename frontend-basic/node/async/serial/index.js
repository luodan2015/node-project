const logTime = name => {
  console.log(`${name} ... now time ... ${new Date().toLocaleDateString()}`);
};

exports.callback = () => {
  setTimeout(() => {
    logTime('callback01');

    setTimeout(() => {
      logTime('callback02');
    }, 100);
  }, 100);
}

const promise = (name, delay = 100) => new Promise(resolve => {
  setTimeout(() => {
    logTime(name);
    resolve();
  }, delay);
});

exports.promise = () => {
  promise('Promise01')
    .then(promise('Promise02'))
    .then(promise('Promise03'));
}

exports.generator = () => {
  const generator = function* (name) {
    yield promise(`${name}1`);
    yield promise(`${name}2`);
    yield promise(`${name}3`);
  }
  
  let co = generator => {
    if (it = generator.next().value) {
      it.then(res => {
        co(generator);
      });
    }
  }

  co(generator('Co-Generator'));
}

exports.asyncAwait = async () => {
  await promise('Async/Await 1');
  await promise('Async/Await 2');
  await promise('Async/Await 3');
  await promise('Async/Await 4');
}

// 事件监听方式处理
exports.event = async () => {
  const asyncFun = name => event => {
    setTimeout(() => {
      logTime(name);
      event.emit('end');
    }, 100);
    return event;
  }

  const ary = [
    asyncFun('event 1'),
    asyncFun('event 2'),
    asyncFun('event 3'),
  ];

  const { EventEmitter } = require('events');
  const event = new EventEmitter();
  const len = ary.length;
  let i = 0;
  event.on('end', () => i < len && ary[i ++ ](event));
  event.emit('end');
}