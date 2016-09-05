import {
    Text,
    ListView,
    TouchableHighlight,
} from 'react-native';

import {
    STYLE_ITEM,
    STYLE_SCROLL_VIEW
} from './styles.js';


class List extends PComponent {
    styles = {
        list: STYLE_SCROLL_VIEW,
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
