const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("click", (args) => {
  console.log("监听到了click事件", args);
});

emitter.on("click", (args) => {
  console.log("监听到了click事件", args);
});

emitter.on("tap", (args) => {
  console.log("监听到了tap事件", args);
});

// 获取注册事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount("click"));
console.log(emitter.listeners("click"));
