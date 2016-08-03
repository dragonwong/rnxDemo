import { STYLE_ALL } from '../../common/styles.js';
const LIST_BORDER_COLOR = '#C9C9C9';

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
                borderBottomColor: LIST_BORDER_COLOR,
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
