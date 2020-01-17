/**
 * @author: samuelcheng
 * @date: 2020/1/16
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/16
 */

const EventEmitter = require('events').EventEmitter;

class GeekTime extends EventEmitter {
  constructor() {
    super();
    setInterval(()=> {
      this.emit('newLesson', {
        price: parseInt(Math.random() * 100)
      })
    }, 3000)
  }
}

module.exports = GeekTime;
