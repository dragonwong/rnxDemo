import * as types from '../actions/constants'

const initialState = {
    other: 'This is another state',
    userList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_USER_LIST:
            return {
                ...state,
                userList: action.payload
            };
            break;
        default:
            return state;
    }
}
