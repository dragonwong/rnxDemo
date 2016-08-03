import profile from './profile'
import users from './users'
import your from './your'

const { combineReducers } = RNPlus.Redux;

export default combineReducers({
    profile,
    users,
    your
})
