/**
 * @author: samuelcheng
 * @date: 2020/1/16
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/16
 */

(function () {
  const promise = new Promise(function (resolve, reject) {
    // setTimeout(()=>{
    //   resolve({a:1});
    // }, 300);

    setTimeout(()=>{
      reject(new Error('Fail'));
    }, 500);
  });

  promise.then(function (res) {
    console.log('---res---', res);
  }).catch(function (err) {
    console.log('---err---', err)
  });

  console.log('---promise1---', promise);
  setTimeout(()=>{
    console.log('---promise2---', promise);
  }, 1200);

})();




