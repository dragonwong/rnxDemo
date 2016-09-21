import * as types from './constant';

// 模拟 fetch 的异步更新列表方法
export function updateList() {
  return {
    type: types.UPDATE_LIST,
    payload: new Promise((resolve) => {
      setTimeout(() => {
        const listDataOrigin = Array.from({
          length: 10,
        }, (item, index) => ({
          id: index,
          name: `产品${index}`,
          count: 0,
        }));

        resolve(listDataOrigin);
      }, 1000);
    }),
  };
}

export function addItemCount(index) {
  return {
    type: types.ADD_ITEM_COUNT,
    payload: index,
  };
}

export function reduceItemCount(index) {
  return {
    type: types.REDUCE_ITEM_COUNT,
    payload: index,
  };
}

export function clearSelect() {
  return {
    type: types.CLEAR_SELECT,
  };
}
