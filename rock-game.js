var playerAction = process.argv[process.argv.length - 1];

console.log('process.argv', process.argv);

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
} else if(
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scissor')
){
    console.log('玩家赢！');
}else{
    console.log('玩家输！');
}
