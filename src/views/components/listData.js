import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    {
        gap: true,
        text: '弹框 Dialog',
        onPress() {
            RNPlus.open('CompDialog');
        },
    },
    {
        text: '数字 Number',
        onPress() {
            RNPlus.open('CompNumber');
        },
    },
]);

export default listData;