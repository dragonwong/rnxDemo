import {
    Text,
    ListView,
    TouchableHighlight,
} from 'react-native';

import {
    STYLE_ITEM,
} from './styles.js';


class List extends QComponent {
    styles = {
        list: {
            backgroundColor: '#F0EFF5',
        },
        item: STYLE_ITEM,
        'list-item': {
            justifyContent: 'center',
        },
        'item-gap': {
            marginTop: 20
        },
    };
    render() {
        return (
            <ListView class="list" contentContainerStyle={{paddingBottom: 20}}
                dataSource={this.props.dataSource}
                renderRow={(item) => {
                    let className = "item list-item";

                    if (item.gap) {
                        className += ' item-gap';
                    }

                    return (
                        <TouchableHighlight class={className} underlayColor="#D9D9D9" onPress={item.onPress.bind(this)}>
                            <Text style={{
                                color: 'black'
                            }}>
                                {item.text}
                            </Text>
                        </TouchableHighlight>
                    );
                }}
            />
        );
    }
}

export default List;
