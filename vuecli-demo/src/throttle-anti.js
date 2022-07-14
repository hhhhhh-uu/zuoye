//节流
const throttle = (funcs, time) => {
    let sum;
    return () => {
      if (!sum) {
        sum = setTimeout(() => {
        funcs();
        sum = null;
        }, time);
      }
    };
  };

  //防抖
  function antiShake(funcs, time) {
    if (times !== null) clearTimeout(times)
    times = setTimeout(function () {
      typeof funcs === 'function' && func()
    }, time)
  }


  module.exports = {
    antiShake,
    throttle,
  };
