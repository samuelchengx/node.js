/**
 * @author: samuelcheng
 * @date: 2020/1/16
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/16
 */

const glob = require('glob');


var result = null;
console.time('glob');
// result = glob.sync(__dirname + '/**/*');

// console.log('result', result);

glob(__dirname + '/**/*', function (err, res) {
  result =  res;
  // console.log('result', result);
});
console.timeEnd('glob');
