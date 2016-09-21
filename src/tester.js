const successMsg = '%c成功';
const failMsg = '%c失败';
const successColor = 'color: green';
const failColor = 'color: red';
// 任务测试间隔时间
const interval = 700;
const tasks = [];

let canUseLog = true;

const tester = {
    // 添加测试案例
  addCase(name, fn) {
    tasks.push(() => {
      const res = fn();
      const msg = res ? successMsg : failMsg;
      const color = res ? successColor : failColor;

      console.log(msg, color, name);
    });
  },
    // 过场动作
  addProcess(fn) {
    tasks.push(fn);
  },
  start() {
    this.logBlcok();
    console.info('测试开始');

    let i = 0;
    const len = tasks.length;

    setTimeout(function test() {
      if (i < len) {
        tasks[i]();
        i += 1;
        setTimeout(test, interval);
      } else {
        console.info('测试结束');
        setTimeout(() => {
          tester.logRecover();
        }, 1000);
      }
    }, interval);
  },

    // 屏蔽 log 方法
  logBlcok() {
    canUseLog = false;
    console.log('%c屏蔽 tester.log', 'color: grey');
  },
    // 恢复 log 方法
  logRecover() {
    canUseLog = true;
    console.log('%c恢复 tester.log', 'color: grey');
  },

  log(...args) {
    if (canUseLog) {
      console.log(...args);
    }
  },
};

export default tester;
