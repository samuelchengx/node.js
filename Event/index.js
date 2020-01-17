/**
 * @author: samuelcheng
 * @date: 2020/1/16
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/16
 */
const GeekTime = require('./lib');

const geekTime = new GeekTime;

geekTime.addListener('newLesson', (data) => {
  console.log('yeah', data);
});
