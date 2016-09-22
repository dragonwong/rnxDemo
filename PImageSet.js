/**
 * @providesModule PImageSet
 */

// const entriesMap = Object.entries({
//   shy: 'shy.jpg',
//   handsome: 'handsome.jpg',
// });
//
// const DEV_PATH = './asset/image/';
// const PRD_URL = 'https://foo/bar/';
//
// const ffff = require('./asset/image/handsome.jpg')
//
// // dev
// const devImageMap = (() => {
//   const res = {};
//   for (const [key, value] of entriesMap) {
//     // res[key] = require(DEV_PATH + value);
//     res[key] = ffff;
//   }
//   return res;
// })();
//
// export default devImageMap;

// // prd
// const prdImageMap = (() => {
//   const res = {};
//   for (const [key, value] of entriesMap) {
//     res[key] = {
//       uri: PRD_URL + value,
//     };
//   }
//   return res;
// })();
//
// export default prdImageMap;

export default {
  shy: 'https://github.com/dragonwong/excited/raw/master/img/shy.jpg',
  handsome: 'https://github.com/dragonwong/excited/raw/master/img/handsome.jpg',
};
