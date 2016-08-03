import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    {
        gap: true,
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
