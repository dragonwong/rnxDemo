'use strict';

import {
    View,
} from 'react-native';
import {
    STYLE_ALL,
} from '../../common/styles.js';

import Calendar from 'rnx-ui-calendar';

const navBarOpts = {
    // 标题内容，默认空字符串
    title: 'Calendar',
};


class CompCalendar extends QView {
    constructor(props) {
        super(props)

        // prepare options
        const today = new Date();
        const todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const aWeekLater = new Date(today.getTime() +  7 * 24 * 60 * 60 * 1000);
        const aWeekLaterStr = aWeekLater.getFullYear() + '-' + (aWeekLater.getMonth() + 1) + '-' + aWeekLater.getDate();

        this.state = {
            holiday: {
                '2016-01-01': '元旦',
                '2016-02-07': '除夕',
                '2016-02-08': '春节',
                '2016-02-22': '元宵节',
                '2016-04-03': '清明节',
                '2016-05-01': '劳动节',
                '2016-06-09': '端午节'
            },

            active: {
                [todayStr]: 'fill',
                [aWeekLaterStr]: 'fill',
                '2016-03-05': 'border',
                '2016-04-10': 'border',
                '2016-04-25': 'border',
                '2016-05-05': 'border',
                '2016-06-25': 'border'
            },

            note: {
                [todayStr]: '出发',
                [aWeekLaterStr]: '返程',
                '2016-03-05': '特价',
                '2016-04-10': '特价',
                '2016-04-25': '特价',
                '2016-05-05': '特价',
                '2016-06-25': '特价'
            }
        }
    }

    styles = {
        all: STYLE_ALL,
    };

    render() {
        return (
            <View class="all">
                <RNPlus.Router.NavBar opts={navBarOpts} />
                <View style={{
                    flex: 1,
                }}>
                    <Calendar
                        holiday={this.state.holiday}
                        active={this.state.active}
                        note={this.state.note}
                        startTime='2016-01-01'
                        endTime='2017-01-01'
                        onPress={this.alertDate}
                    />
                </View>
            </View>
        );
    }

    alertDate(d) {
        alert(d.date)
    }
}

export default CompCalendar;
