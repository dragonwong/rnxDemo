import {
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import {
    STYLE_ALL,
    STYLE_ITEM,
} from '../../common/styles.js';

import Number from 'rnx-ui-number';

const navBarOpts = {
    // 标题内容，默认空字符串
    title: 'Number',
};

class CompNumber extends QView {

    constructor (props) {
        super(props)

        this.state = {
            value1: 0,
            value2: 5,
        }
    }

    styles = {
        all: STYLE_ALL,
        item: STYLE_ITEM,
        button: {
            padding: 4,
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: "#fff",
        },
        title: {
            borderBottomColor: '#C9C9C9',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
        },
    };

    render() {
        return (
            <View class="all">
                <RNPlus.Router.NavBar opts={navBarOpts} />
                <ScrollView style={{
                    flex: 1,
                }}>
                    <View class="title">
                        <Text>随机赋值</Text>
                    </View>

                    <View class="item">
                        <Number
                            value={this.state.value1}
                            onChange={(v) => this.onChange(v, 1)}
                        />
                        <TouchableHighlight
                            underlayColor="#D9D9D9"
                            onPress={() => this.change(10, 1)}
                            class="button"
                            style={{marginLeft: 10}}
                        >
                            <Text>随机赋值</Text>
                        </TouchableHighlight>
                    </View>

                    <View class="title">
                        <Text>min: -2 max: 10</Text>
                    </View>

                    <View class="item">
                        <Number
                            value={this.state.value2}
                            onChange={(v) => this.onChange(v, 2)}
                            min={-2} max={10}
                        />
                        <TouchableHighlight
                            underlayColor="#D9D9D9"
                            onPress={() => this.change(10, 2)}
                            class="button"
                            style={{marginLeft: 10}}
                        >
                            <Text>随机赋值</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }

    change(max, n) {
        let obj = {};
        obj[`value${n}`] = parseInt(Math.random() * max);
        this.setState(obj);
    }

    onChange(v, n) {
        let obj = {};
        obj[`value${n}`] = v;
        this.setState(obj);
    }

};

export default CompNumber;
