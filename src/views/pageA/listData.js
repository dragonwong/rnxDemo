import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    {
        gap: true,
        text: 'open PageA',
        onPress() {
            let res = RNPlus.open('PageA', {
                // 传递参数
                param: {
                    api: 'open',
                    from: 'PageA',
                    to: 'PageA'
                },
            });
            tester.log(res);
        },
    },
    {
        text: 'open PageB',
        onPress() {
            let res = RNPlus.open('PageB', {
                // 传递参数
                param: {
                    api: 'open',
                    from: 'PageA',
                    to: 'PageB'
                },
            });
            tester.log(res);
        },
    },
    {
        text: 'goto Base',
        onPress() {
            let res = RNPlus.goto('PageB', {
                param: {
                    api: 'goto',
                    from: 'PageA',
                    to: 'Base'
                }
            });
            tester.log(res);
        },
    },
    {
        text: 'goto PageB',
        onPress() {
            let res = RNPlus.goto('PageB', {
                param: {
                    api: 'goto',
                    from: 'PageA',
                    to: 'PageB'
                }
            });
            tester.log(res);
        },
    },
    {
        text: 'back',
        onPress() {
            let res = RNPlus.back({
                param: {
                    api: 'back',
                    from: 'PageA',
                    to: 'Base',
                }
            });
            tester.log(res);
        },
    },
    {
        text: 'backTo',
        onPress() {
            let res = RNPlus.backTo('Base', {
                param: {
                    api: 'backTo',
                    from: 'PageA',
                    to: 'Base',
                }
            });
            tester.log(res);
        },
    },
    {
        text: 'home',
        onPress() {
            let res = RNPlus.home({
                param: {
                    api: 'home',
                    from: 'PageA',
                    to: 'Base',
                }
            });
            tester.log(res);
        },
    },
    {
        text: 'close',
        onPress() {
            let res = RNPlus.close();
            tester.log(res);
        },
    },
    {
        text: 'close Base',
        onPress() {
            let res = RNPlus.close('Base');
            tester.log(res);
        },
    },

    {
        gap: true,
        text: '▶︎ 开始自动化测试',
        onPress() {
            tester.start();
        },
    },
    {
        text: '[error test] open 未注册页面',
        onPress() {
            let res = RNPlus.open('unregisteredView');
            tester.log(res);
        },
    },
    {
        text: '[error test] goto 未注册页面',
        onPress() {
            let res = RNPlus.goto('unregisteredView');
            tester.log(res);
        },
    },
    {
        text: '[error test] backTo 未注册页面',
        onPress() {
            let res = RNPlus.backTo('unregisteredView');
            tester.log(res);
        },
    },
    {
        text: '[error test] backTo 不在路由历史页面',
        onPress() {
            let res = RNPlus.backTo('pageB');
            tester.log(res);
        },
    },
    {
        text: '[error test] close 未注册页面',
        onPress() {
            let res = RNPlus.close('unregisteredView');
            tester.log(res);
        },
    },
    {
        text: '[error test] close 不在路由历史页面',
        onPress() {
            let res = RNPlus.close('pageB');
            tester.log(res);
        },
    },
]);

export default listData;
