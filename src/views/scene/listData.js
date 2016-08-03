import { ListView } from 'react-native';
import tester from '../../tester.js';
let merge = require('../../../node_modules/merge');
let NavigatorSceneConfigs = require('NavigatorSceneConfigs');

let sceneConfigNoGestures = merge.clone(NavigatorSceneConfigs.PushFromRight);
let sceneConfigSetEdgeWidth = merge.clone(NavigatorSceneConfigs.PushFromRight);
sceneConfigNoGestures.gestures = {};
sceneConfigSetEdgeWidth.gestures.pop.edgeHitWidth = 200;

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([

    {
        gap: true,
        text: '配置切换动画',
        onPress() {
            RNPlus.open('SceneBlank', {
                sceneConfig: 'VerticalUpSwipeJump',
            });
        },
    },
    {
        text: '禁用侧滑回退手势',
        onPress() {
            RNPlus.open('SceneBlank', {
                sceneConfig: sceneConfigNoGestures,
            });
        },
    },
    {
        text: '配置侧滑回退手势范围',
        onPress() {
            RNPlus.open('SceneBlank', {
                sceneConfig: sceneConfigSetEdgeWidth,
            });
        },
    },
    {
        text: '开关安卓物理返回键',
        onPress() {
            RNPlus.open('SceneAndroidBack');
        },
    },
]);

export default listData;
