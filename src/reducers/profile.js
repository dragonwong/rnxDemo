import * as types from '../actions/constants'

const initialState = {
    id: '',
    name: '',
    sex: '',
    age: '',
    hobby: '',
    motto: '闷声发大财，这是坠吼滴',
    followingList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.ADD_ITEM_COUNT:
            return {
                ...state,
                ...action.payload
            };
            break;
        case types.FETCH_FOLLOWING:
            return {
                ...state,
                followingList: action.payload
            };
            break;
        default:
            return state;
    }
}
