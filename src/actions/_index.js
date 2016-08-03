import * as types from './constants'
import {
    getUserList,
    getUserById,
    getUserFriends,
    getYourself,
    followSomeone
} from '../data'

export function fetchUserList() {
    return {
        type: types.FETCH_USER_LIST,
        payload: getUserList()
    }
}

export function fetchFollowing(following) {
    return {
        type: types.FETCH_FOLLOWING,
        payload: getUserFriends(following)
    }
}

export function fetchUserDetail(id) {
    return {
        type: types.FETCH_USER_INFO,
        payload: getUserById(id)
    }
}

export function fetchYourself() {
    return {
        type: types.FETCH_YOURSELF,
        payload: getYourself()
    }
}

export function follow(yourId, id) {
    return {
        type: types.FOLLOW_SOMEONE,
        payload: followSomeone(yourId, id)
    }
}
