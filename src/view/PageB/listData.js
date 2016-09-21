import RNPlus from 'rnplus';
import { ListView } from 'react-native';
import tester from '../../tester.js';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: 'backTo Base',
    onPress() {
      const res = RNPlus.backTo('Base', {
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
    text: 'open Base',
    onPress() {
      const res = RNPlus.open('Base', {
        param: {
          api: 'open',
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
          from: 'pageB',
          to: 'pageB',
        },
      });
      tester.log(res);
    },
  },
]);

export default listData;
