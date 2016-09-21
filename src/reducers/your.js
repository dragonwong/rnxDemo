import * as types from '../actions/constants';

// 这只是一个例子，证实新 store 创建时会复制之前的 store
const initialState = {
  id: '',
  name: '',
  diff: '',
  motto: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_YOURSELF:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
