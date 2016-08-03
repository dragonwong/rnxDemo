import { View } from 'react-native';
import List from '../../common/List.js';
import listData from './listData.js';

let navBarOpts = {
    // 背景色，默认 Qunar 蓝
    backgroundColor: '#fff',
    // 标题颜色，默认白色
    centerTextStyle: {
        color: '#000',
    },
    // 标题内容，默认空字符串
    title: '导航栏',
    // 标题到左右两边的距离，默认 50
    titleGap: 100,
    // 左侧按钮颜色，默认白色
    leftTextStyle: {
        color: '#007AFF',
    },
    // 左侧按钮文字，默认 '返回'
    leftText: '弹框',
    // 左侧按钮点击事件，默认 `RNPlus.back()`
    leftEvent() {
        alert('left...')
    },
    // 右侧按钮颜色，默认白色
    leftTextStyle: {
        color: '#007AFF',
    },
    // 右侧按钮文字，默认空字符串
    rightText: '相册',
    // 右侧按钮点击事件，默认空函数
    rightEvent() {
        alert('right...');
    },
};

export default function() {
    return (
        <View style={{
            flex: 1,
        }}>
            <RNPlus.Router.NavBar opts={navBarOpts} ref="navBar" />
            <View style={{
                flex: 1,
            }}>
                <List dataSource={listData} view={this} />
            </View>
        </View>
    );
};
