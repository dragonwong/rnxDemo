import { ListView } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: '关闭安卓物理返回键',
    onPress() {
      this.props.view.preventBackByAndroidKey = true;
    },
  },
  {
    text: '开启安卓物理返回键',
    onPress() {
      this.props.view.preventBackByAndroidKey = false;
    },
  },
]);

export default listData;
