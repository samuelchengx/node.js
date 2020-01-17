/**
 * @author: samuelcheng
 * @date: 2020/1/17
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/17
 */

(function () {
  var promise = interview();
  promise.then(function (res) {
    console.log('-----res-----', res);

  }).catch(function (err) {
    console.log('-----err-----', err);
  });
})();

function interview() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if(Math.random() > 0.5) {
        resolve('success');
      } else {
        reject(new Error('Fail'))
      }
    }, 500)
  })
}
