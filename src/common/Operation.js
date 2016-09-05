import {
    addItemCount,
    reduceItemCount,
} from '../actions';

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

const BUTTON_WIDTH = 20;
const BUTTON_COLOR = '#3385ff';
const BUTTON_COLOR_UNDERLAY = '#66a3ff';

class Operation extends PComponent {
    static reduxPlugin = {
        mapDispatchToProps: {
            addItemCount,
            reduceItemCount,
        },
    };

    onPressOperation(index, type) {
        if (type === 'add') {
            this.props.addItemCount(index);
        } else {
            this.props.reduceItemCount(index);
        }
    };

    styles = {
        operation: {
            width: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
            'operation-button': {
                width: BUTTON_WIDTH,
                height: BUTTON_WIDTH,
                borderRadius: BUTTON_WIDTH/2,
                borderWidth: 1,
                borderColor: BUTTON_COLOR,
                backgroundColor: BUTTON_COLOR,
                overflow: 'hidden',
            },
                'operation-button-text': {
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
    };

    render() {
        return (
            <View class="operation">
                <TouchableHighlight class="operation-button" underlayColor={BUTTON_COLOR_UNDERLAY} onPress={this.onPressOperation.bind(this, this.props.index, 'reduce')}>
                    <Text class="operation-button-text">-</Text>
                </TouchableHighlight>
                <View style={{
                    justifyContent: 'center',
                }}>
                    <Text>{this.props.count}</Text>
                </View>
                <TouchableHighlight class="operation-button" underlayColor={BUTTON_COLOR_UNDERLAY} onPress={this.onPressOperation.bind(this, this.props.index, 'add')}>
                    <Text class="operation-button-text">+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Operation;
