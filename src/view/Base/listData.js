import RNPlus from 'rnplus';
import { ListView } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: '路由 Router',
    onPress() {
      RNPlus.open('PageA');
    },
  },
  {
    text: '场景 scene',
    onPress() {
      RNPlus.open('Scene');
    },
  },
  {
    text: '导航栏 NavBar',
    onPress() {
      RNPlus.open('NavBar');
    },
  },
  {
    text: '弹层 Popup',
    onPress() {
      RNPlus.open('Popup');
    },
  },
  {
    text: '桥 Bridge',
    onPress() {
      RNPlus.open('Bridge');
    },
  },

  {
    gap: true,
    text: 'WebX',
    onPress() {
      RNPlus.open('WebX');
    },
  },

  {
    gap: true,
    text: 'Redux 示例 ReduxList',
    onPress() {
      RNPlus.open('ReduxList');
    },
  },

  {
    gap: true,
    text: '组件 Components',
    onPress() {
      RNPlus.open('Components');
    },
  },

  {
    gap: true,
    text: '字体 IconFont',
    onPress() {
      RNPlus.open('IconFont');
    },
  },
]);

export default listData;
