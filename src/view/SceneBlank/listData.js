import RNPlus from 'rnplus';
import { ListView } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const listData = ds.cloneWithRows([
  {
    text: 'back',
    onPress() {
      RNPlus.back();
    },
  },
]);

export default listData;
