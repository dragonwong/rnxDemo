import { View } from 'react-native';
import List from '../../common/List.js';
import listData from './listData.js';
import { STYLE_ALL } from '../../common/styles.js';

let navBarOpts = {
    // 标题内容，默认空字符串
    title: 'Components',
};

export default function() {
    return (
        <View style={STYLE_ALL}>
            <RNPlus.Router.NavBar opts={navBarOpts} />
            <View style={{
                flex: 1,
            }}>
                <List dataSource={listData} view={this} />
            </View>
        </View>
    );
};
