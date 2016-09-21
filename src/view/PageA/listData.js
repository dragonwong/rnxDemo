import { ListView } from 'react-native';
import RNPlus from 'rnplus';
import tester from '../../tester.js';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: 'open PageA',
    onPress() {
      const res = RNPlus.open('PageA', {
        // 传递参数
        param: {
          api: 'open',
          from: 'PageA',
          to: 'PageA',
        },
      });
      tester.log(res);
    },
  },
  {
    text: 'open PageB',
    onPress() {
      const res = RNPlus.open('PageB', {
        // 传递参数
        param: {
          api: 'open',
          from: 'PageA',
          to: 'PageB',
        },
      });
      tester.log(res);
    },
  },
  {
    text: 'goto Base',
    onPress() {
      const res = RNPlus.goto('PageB', {
        param: {
          api: 'goto',
          from: 'PageA',
          to: 'Base',
        },
      });
      tester.log(res);
    },
  },
  {
    text: 'goto PageB',
    onPress() {
      const res = RNPlus.goto('PageB', {
        param: {
          api: 'goto',
          from: 'PageA',
          to: 'PageB',
        },
      });
      tester.log(res);
    },
  },
  {
    text: 'back',
    onPress() {
      const res = RNPlus.back({
        param: {
          api: 'back',
          from: 'PageA',
          to: 'Base',
        },
      });
      tester.log(res);
    },
  },
  {
    text: 'backTo',
    onPress() {
      const res = RNPlus.backTo('Base', {
        param: {
          api: 'backTo',
          from: 'PageA',
          to: 'Base',
        },
      });
      tester.log(res);
    },
  },
  {
    text: 'home',
    onPress() {
      const res = RNPlus.home({
        param: {
          api: 'home',
          from: 'PageA',
          to: 'Base',
        },
      });
      tester.log(res);
    },
  },
  {
    text: 'close',
    onPress() {
      const res = RNPlus.close();
      tester.log(res);
    },
  },
  {
    text: 'close Base',
    onPress() {
      const res = RNPlus.close('Base');
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
      const res = RNPlus.open('unregisteredView');
      tester.log(res);
    },
  },
  {
    text: '[error test] goto 未注册页面',
    onPress() {
      const res = RNPlus.goto('unregisteredView');
      tester.log(res);
    },
  },
  {
    text: '[error test] backTo 未注册页面',
    onPress() {
      const res = RNPlus.backTo('unregisteredView');
      tester.log(res);
    },
  },
  {
    text: '[error test] backTo 不在路由历史页面',
    onPress() {
      const res = RNPlus.backTo('pageB');
      tester.log(res);
    },
  },
  {
    text: '[error test] close 未注册页面',
    onPress() {
      const res = RNPlus.close('unregisteredView');
      tester.log(res);
    },
  },
  {
    text: '[error test] close 不在路由历史页面',
    onPress() {
      const res = RNPlus.close('pageB');
      tester.log(res);
    },
  },
]);

export default listData;
