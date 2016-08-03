import * as types from '../actions/constants';
import {
    ListView,
} from 'react-native';

const { combineReducers } = RNPlus.Redux;

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const initialState = {
    total: 0,
    listDataOrigin: [],
    listData: ds.cloneWithRows([]),
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_LIST:
            var listDataOrigin = action.payload;

            return {
                ...state,
                listDataOrigin,
                listData: ds.cloneWithRows(listDataOrigin),
            };

        case types.ADD_ITEM_COUNT:
            var hasChanged = false;
            var listDataOrigin = state.listDataOrigin.map((item, index) => {
                if (action.payload == index) {
                    hasChanged = true;
                    return {
                        ...item,
                        count: item.count + 1
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            });

            return {
                listDataOrigin,
                listData: ds.cloneWithRows(listDataOrigin),
                total: hasChanged ? state.total + 1 : state.total,
            };

        case types.REDUCE_ITEM_COUNT:
            var hasChanged = false;
            var listDataOrigin = state.listDataOrigin.map((item, index) => {
                if (action.payload == index && item.count > 0) {
                    hasChanged = true;
                    return {
                        ...item,
                        count: item.count - 1
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            });

            return {
                listDataOrigin,
                listData: ds.cloneWithRows(listDataOrigin),
                total: hasChanged ? state.total - 1 : state.total,
            };

        case types.CLEAR_SELECT:
            var listDataOrigin = state.listDataOrigin.map((item, index) => {
                return {
                    ...item,
                    count: 0,
                };
            });

            return {
                listDataOrigin,
                listData: ds.cloneWithRows(listDataOrigin),
                total: 0,
            };

        default:
            return state;
    }
}
