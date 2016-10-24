/**
 * @providesModule PImageSet
 */

// 开发环境
const imgLoadingCicleDark = require('./asset/image/loadingCicleDark.png');
const imgLoadingPointerDark = require('./asset/image/loadingPointerDark.png');

// 线上环境
const imgShy = {
  uri: 'https://github.com/dragonwong/excited/raw/master/img/shy.jpg',
};
const imgHandsome = {
  uri: 'https://github.com/dragonwong/excited/raw/master/img/handsome.jpg',
};

export {
  imgShy,
  imgHandsome,
  imgLoadingCicleDark,
  imgLoadingPointerDark,
};
