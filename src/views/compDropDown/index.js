import {
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import {
    STYLE_ALL,
    STYLE_ITEM,
    STYLE_INTRO,
    STYLE_INTRO_TEXT,
} from '../../common/styles.js';

import DropDown, { DropDownTrigger } from 'rnx-ui-dropdown';

const navBarOpts = {
    // 标题内容，默认空字符串
    title: 'Dropdown',
};

class CompDropDown extends QView {

    constructor (props) {
        super(props)

        this.state = {
            cur1: {
                visible: false,
                style: {
                    // width:
                    // left :
                    // top  :
                }
            },
            value: '点击下拉选择',
            drowDownCnf: {
                valueGetter: () => {
                    return this.state.value;
                },
                valueSetter: (value, index) => {
                    return this.setState({
                        value: value,
                    })
                },
                visibleGetter: () => {
                    return this.state.cur1;
                },
                visibleSetter: (visible, style) => {
                    return this.setState({
                        cur1: {
                            visible: visible,
                            style: {...style}
                        }
                    });
                },
            },
        }
    }

    styles = {
        all: STYLE_ALL,
        item: STYLE_ITEM,
        intro: STYLE_INTRO,
        introText: STYLE_INTRO_TEXT,
    };

    render() {
        const { drowDownCnf } = this.state;

        return (
            <View class="all">
                <RNPlus.Router.NavBar opts={navBarOpts} />
                <ScrollView style={{
                    flex: 1,
                }}>
                    <View class="intro">
                        <Text class="introText">
                            下拉选择组件分为 DropDownTrigger 和 DropDown 两部分。和 Dialog 类似，应该把 DropDown 放在靠后的结构上，以使其正常渲染。
                        </Text>
                    </View>

                    <DropDownTrigger
                        style={{backgroundColor: '#3ac'}}
                        config={drowDownCnf}
                    />
                </ScrollView>
                <DropDown
                    config={drowDownCnf}
                    data={[1, 2, 6, 3, 4, 5, 2, ,3, 4, 5, 2, ,3, 4, 5]}
                />
            </View>
        )
    }
};

export default CompDropDown;