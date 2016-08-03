'use strict';

import {
    View,
    Text,
    ListView,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';

const LIST_BORDER_COLOR = '#C9C9C9';
const ACTIVED_BG_COLOR = '#D9D9D9';

let navBarOpts = {
    // 标题内容，默认空字符串
    title: 'WebX',
};

class WebX extends QView {

    routerPlugin = {
        leftButtonText: '',
        title: 'WebX',
    };

    styles = {
        Text: {
            color: '#CAAD45'
        },

        list: {
            flex: 1,
            backgroundColor: '#F0EFF5',
        },
        item: {
            borderBottomColor: LIST_BORDER_COLOR,
            borderBottomWidth: 1,
            height: 40,
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingLeft: 10,
        },
        'item-gap': {
            marginTop: 20
        },

        'vh-vw': {
            fontSize: '3vh',
            borderColor: 'red',
            borderWidth: 1,
            width: '50vw',
        },

        // active
        'item-1': {
            ':active': {
                backgroundColor: '#B1DEE8',
            },
        },
        'item-2': {
            ':active': {
                backgroundColor: '#B1DEE8',
            },
        },
        'child-text': {
            'item-2:active': {
                color: 'red',
            },
        },

        // 媒体查询
        '@media (min-width: 400)': {
            media: {
                color: 'red'
            }
        },
        '@media (max-width:900) and (min-width:400)': {
            media: {
                color: 'blue'
            }
        },

        'media-inner': {
            '@media (min-height: 500)': {
                color: 'red'
            },
            '@media (max-height:900) and (min-height: 500)': {
                color: 'blue'
            },
        },

        transform: {
            transform: 'translateX(50), rotate(-2deg)',
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            dataSource: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(['row 1', 'row 2', 'row 3'])
        };
    }

    testPressView() {
        alert('You pressed a View.');
    }
    testAutoBind() {
        console.log('testAutoBind', this);
    }

    render() {

        return (
            <View style={{
                flex: 1,
            }}>
                <RNPlus.Router.NavBar opts={navBarOpts} />
                <View class="list">
                    <View class="item item-gap">
                        <Text>
                            通过 className 写样式
                        </Text>
                    </View>
                    <View class="item">
                        <Text>
                            通过 ComponentName 写样式（查看 Text 样式）
                        </Text>
                    </View>

                    <View class="item item-gap">
                        <Text class="vh-vw">
                            支持 vh 和 vw 单位
                        </Text>
                    </View>

                    <View class="item item-gap item-1">
                        <Text>
                            支持 :active
                        </Text>
                    </View>
                    <View class="item item-2">
                        <Text class="child-text">
                            甚至支持通过获取其他组件的 :active 改变自己样式
                        </Text>
                    </View>

                    <View class="item item-gap">
                        <Text class="media">
                            支持媒体查询（宽高）
                        </Text>
                    </View>
                    <View class="item">
                        <Text class="media-inner">
                            样式内部也支持媒体查询（宽高）
                        </Text>
                    </View>

                    <View class="item item-gap">
                        <Text class="transform">
                            transform 增强
                        </Text>
                    </View>

                    <View class="item item-gap" onPress={this.testPressView}>
                        <Text>
                            View 上也可绑定 onPress 事件
                        </Text>
                    </View>
                    <TouchableHighlight class="item" underlayColor={ACTIVED_BG_COLOR} onPress={this.testAutoBind}>
                        <Text>
                            函数自动 bind
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
