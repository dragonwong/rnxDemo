const userList = [
    {
        id: '0',
        name: '你自己',
        following: []
    },
    {
        id: '1',
        name: '比利海灵顿',
        following: ['2', '3', '4', '5']
    },
    {
        id: '2',
        name: 'Van样',
        following: ['1']
    },
    {
        id: '3',
        name: '易建联',
        following: ['1']
    },
    {
        id: '4',
        name: '元首',
        following: ['1', '6']
    },
    {
        id: '5',
        name: '东仙队长',
        following: ['4', '6']
    },
    {
        id: '6',
        name: '梁逸峰',
        following: ['4', '5']
    },
    {
        id: '7',
        name: '蓝蓝路',
        following: []
    }
];

const fakeReq = (data) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 100)
});

export function getUserList() {
    return fakeReq(userList);
}

export function getUserById(id) {
    let user = {...userList[id]};
    user.sex = '性别不明';
    user.age = '反正不小了';
    user.hobby = '开车，看球';

    return fakeReq(user);
}

export function getUserFriends(following) {
    return fakeReq(following.map(f => Object.assign({}, userList[f])));
}

export function getYourself() {
    return fakeReq({
        name: '你自己',
        diff: '我和别人不一样',
        motto: '苟利国家生死以，岂因祸福趋避之'
    })
}

export function followSomeone() {
    return fakeReq({
        name: '你自己',
        diff: '我和别人不一样',
        motto: '苟利国家生死以，岂因祸福趋避之'
    })
}
