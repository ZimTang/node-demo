const EventEmitter = require("events");

const emitter = new EventEmitter();

// 只执行一次
emitter.once("click", (arg1, arg2) => {
  console.log("监听到了click事件", arg1, arg2);
});

emitter.on("click", (arg1, arg2) => {
  console.log("监听到了click事件", arg1, arg2);
});

emitter.on("tap", (arg1, arg2) => {
  console.log("监听到了tap事件", arg1, arg2);
});

// 将本次监听放到最前面
emitter.prependListener("click", (arg1, arg2) => {
  console.log("监听3到了click事件", arg1, arg2);
});

setTimeout(() => {
  emitter.emit("click", "curry", "james");
  emitter.emit("click", "curry", "james");
  // 移除所有监听器
  emitter.removeAllListeners();
}, 2000);
