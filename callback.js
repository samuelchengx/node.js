/**
 * @author: samuelcheng
 * @date: 2020/1/16
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/16
 */

function interview(cb) {
  setTimeout(()=>{
    if(Math.random() < 0.4) {
        cb && cb(null, 'success');
      } else {
      cb && cb(new Error('Fail'));
    }
  }, 500);
}

// try {
// interview(function (res) {
//     if(res instanceof Error) {
//       return console.log('cry');
//     }
//     console.log('smile');
//   });
// }
// catch (e) {
//   console.log('cry', e);
// }

// interview(function (res) {
//   if(res instanceof Error) {
//     return console.log('cry');
//   }
//   console.log('smile');
// });

// 回调地狱
// interview(function (err) {
//   if(err) {
//     return console.log('cry at 1nd round');
//   }
//   interview(function (err) {
//     if(err) {
//       return console.log('cry at 2nd round');
//     }
//     interview(function (err) {
//       if(err) {
//         return console.log('cry at 3nd round');
//       }
//       console.log('smile');
//     })
//   })
// });

// 异步流程控制 async.js















