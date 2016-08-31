import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    {
        text: 'back',
        onPress() {
            RNPlus.back();
        },
    },
]);

export default listData;
