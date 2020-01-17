/**
 * @author: samuelcheng
 * @date: 2020/1/15
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/15
 */
// var playerAction = process.argv[process.argv.length - 1];
const game = require('./lib_01');
let count = 0;
process.stdin.on('data', e => {
  const playerAction = e.toString().trim();
  const result = game(playerAction);
  console.log('result', result);
 if(result == -1){
   count++
 }
 if(count==3){
   console.log('你太厉害了，我不玩了！');
   process.exit();
 }
});


