# IOS Platform
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/platform.ios.js --sourcemap-output bundle/platform.ios.js.map --dev false --minify false --bundle-type platform
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/platform.ios.min.js --sourcemap-output bundle/platform.ios.min.js.map --dev false --minify true --bundle-type platform
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/platform.ios.dev.js --sourcemap-output bundle/platform.ios.dev.js.map --dev true --minify false --bundle-type platform
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/platform.ios.dev.min.js --sourcemap-output bundle/platform.ios.dev.min.js.map --dev true --minify true --bundle-type platform
# IOS Biz
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/index.ios.js --sourcemap-output bundle/index.ios.js.map --dev false --minify false --bundle-type biz
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/index.ios.min.js --sourcemap-output bundle/index.ios.min.js.map --dev false --minify true --bundle-type biz
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/index.ios.dev.js --sourcemap-output bundle/index.ios.dev.js.map --dev true --minify false --bundle-type biz
react-native bundle --entry-file index.ios.js --platform ios --bundle-output bundle/index.ios.dev.min.js --sourcemap-output bundle/index.ios.dev.min.js.map --dev true --minify true --bundle-type biz
# Android Platform
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/platform.android.js --sourcemap-output bundle/platform.android.js.map --dev false --minify false --bundle-type platform
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/platform.android.min.js --sourcemap-output bundle/platform.android.min.js.map --dev false --minify true --bundle-type platform
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/platform.android.dev.js --sourcemap-output bundle/platform.android.dev.js.map --dev true --minify false --bundle-type platform
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/platform.android.dev.min.js --sourcemap-output bundle/platform.android.dev.min.js.map --dev true --minify true --bundle-type platform
# Android Biz
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/index.android.js --sourcemap-output bundle/index.android.js.map --dev false --minify false --bundle-type biz
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/index.android.min.js --sourcemap-output bundle/index.android.min.js.map --dev false --minify true --bundle-type biz
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/index.android.dev.js --sourcemap-output bundle/index.android.dev.js.map --dev true --minify false --bundle-type biz
react-native bundle --entry-file index.android.js --platform android --bundle-output bundle/index.android.dev.min.js --sourcemap-output bundle/index.android.dev.min.js.map --dev true --minify true --bundle-type biz
