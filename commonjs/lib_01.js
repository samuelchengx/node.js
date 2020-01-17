/**
 * @author: samuelcheng
 * @date: 2020/1/15
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/15
 */

module.exports = function (playerAction) {
  var random = Math.random() * 3;
  var computerAction = '';
  var userInput = [ 'rock', 'scissor', 'paper'];
  if(userInput.indexOf(playerAction) == -1){
    console.log('请输入正确的用户操作!')
    return
  }
  if(random < 1){
    computerAction = 'rock';
  } else if(random > 2) {
    computerAction = 'scissor';
  } else {
    computerAction = 'paper';
  }
  if(playerAction == computerAction){
    console.log('平局');
    return 0
  } else if(
      (computerAction === 'rock' && playerAction === 'paper') ||
      (computerAction === 'scissor' && playerAction === 'rock') ||
      (computerAction === 'paper' && playerAction === 'scissor')
  ){
    console.log('玩家赢！');
    return 1
  }else{
    console.log('玩家输！');
    return -1
  }

};
