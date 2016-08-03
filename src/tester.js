const successMsg = '%c成功';
const failMsg = '%c失败';
const successColor = 'color: green';
const failColor = 'color: red';

let tasks = [],
    _console = console,
    canUseLog = true,
    // 任务测试间隔时间
    interval = 700;

let tester = {
    // 添加测试案例
    addCase(name, fn) {
        tasks.push(() => {
            let res = fn();
            let msg = res ? successMsg : failMsg;
            let color = res ? successColor : failColor;

            console.log(msg, color, name);
        })
    },
    // 过场动作
    addProcess(fn) {
        tasks.push(fn);
    },
    start() {
        this.logBlcok();
        console.info('测试开始');

        let i = 0,
            len = tasks.length;

        setTimeout(function test() {
            if (i < len) {
                tasks[i]();
                i++;
                setTimeout(test, interval);
            } else {
                console.info('测试结束');
                setTimeout(() => {
                    tester.logRecover();
                }, 1000)
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
        console.log('%c恢复 tester.log',  'color: grey');
    },

    log(...args) {
        if (canUseLog) {
            console.log.apply(console, args);
        }
    },
};

export default tester
