import {
    View,
    Text,
    ListView,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';
import Cart from '../../common/Cart.js';
import Operation from '../../common/Operation.js';

let navBarOpts = {
    title: 'ReduxList',
};

export default function() {
    return (
        <View class="all">
            <RNPlus.Router.NavBar opts={navBarOpts} />
            <View style={{
                flex: 1,
            }}>
                <View class="main">
                    <ListView
                        contentContainerStyle={{paddingBottom: 20}}
                        enableEmptySections={true}
                        dataSource={this.props.listData}
                        renderRow={(item, sectionID, index) => {
                            return (
                                <View class="item" onPress={this.onPressItem.bind(this, index, item.name)}>
                                    <View class="info">
                                        <Text class="name">{item.name}</Text>
                                    </View>
                                    <Operation index={index} count={item.count} />
                                </View>
                            );
                        }}
                    />
                    {
                        this.state.loading ? <ActivityIndicator class="loading" /> : null
                    }
                </View>
                <Cart />
            </View>
        </View>
    );
};
