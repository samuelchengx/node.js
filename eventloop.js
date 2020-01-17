/**
 * @author: samuelcheng
 * @date: 2020/1/16
 * @version: 1.0
 * @last modified by: samuelcheng
 * @last modified time: 2020/1/16
 */
const eventloop = {
  quene: [],
  timeoutQuene: [],
  fsQuene: [],
  loop() {
    while (this.quene.length) {
      var callback = this.quene.shift();
      callback();
    }
    setTimeout(this.loop.bind(this), 50);
  },
  add(callback) {
    this.quene.push(callback);
  }
};
eventloop.loop();
setTimeout(()=>{
  eventloop.add(function () {
    console.log(1)
  })
}, 500);

setTimeout(()=>{
  eventloop.add(function () {
    console.log(2)
  })
}, 800);

