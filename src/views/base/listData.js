import { ListView } from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    // {
    //     gap: true,
    //     text: 'test',
    //     onPress() {
    //
    //     },
    // },

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
        text: 'ReduxList',
        onPress() {
            RNPlus.open('ReduxList');
        },
    },

    {
        gap: true,
        text: 'Components',
        onPress() {
            RNPlus.open('Components');
        },
    },
]);

export default listData;
