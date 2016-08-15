import {
    View,
    Image,
    Dimensions,
} from 'react-native';

import {
    STYLE_ALL,
} from '../../common/styles.js';

import Carousel from 'rnx-ui-carousel';

const navBarOpts = {
    // 标题内容，默认空字符串
    title: 'Carousel',
};

class CompCarousel extends QView {

    styles = {
        all: STYLE_ALL,
        page: {
            width: Dimensions.get('window').width,
            flex: 1,
            alignItems: 'stretch',
        },
        img: {
            flex:1,
        },
    };

    render() {
        return (
            <View class="all">
                <RNPlus.Router.NavBar opts={navBarOpts} />
                <View style={{
                    flex: 1,
                }}>
                    <Carousel showPagination = {true}>
                        <View class="page">
                            <Image
                                class="img"
                                source={{uri: 'http://ww3.sinaimg.cn/large/4c8b519djw1f6pkqvpivnj208w0dy746.jpg'}}
                            />
                        </View>
                        <View class="page">
                            <Image
                                class="img"
                                source={{uri: 'http://ww3.sinaimg.cn/large/4c8b519djw1f6pl2qtmjhj208w0dyq2t.jpg'}}
                            />
                        </View>
                        <View class="page">
                            <Image
                                class="img"
                                source={{uri: 'http://ww3.sinaimg.cn/large/4c8b519djw1f6pl2qt64yj208w0dyjra.jpg'}}
                            />
                        </View>
                    </Carousel>
                </View>
            </View>
        );
    }
}

export default CompCarousel;
