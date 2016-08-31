import {
    STYLE_ALL,
    COLOR_LIST_BORDER,
} from '../../common/styles.js';

export default {
    all: STYLE_ALL,

    main: {
        flex: 1,
        position: 'relative',
    },
            item: {
                flexDirection: 'row',
                height: 100,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderBottomColor: COLOR_LIST_BORDER,
                borderBottomWidth: 1,
                paddingLeft: 10,
                paddingRight: 10,
            },
                info: {
                    flex: 1,
                },
                    name: {
                        fontSize: 20,
                    },

        loading: {
            position: 'absolute',
            top: 20,
            width: '100vw',
        },
};
