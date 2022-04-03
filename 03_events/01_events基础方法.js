const EventEmitter = require("events");

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// addListener()
// on()
emitter.on("click", (args) => {
  console.log("监听到了click事件", args);
});

const listener2 = (args) => {
  console.log("监听到了click事件", args);
};
emitter.on("click", listener2);

// 3.发射一个事件
emitter.emit("click", "zim", "curry");

emitter.off("click", listener2);

emitter.emit("click", "zim", "curry");
