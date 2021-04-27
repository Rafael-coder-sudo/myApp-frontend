
import * as type from './types'
const userKey = '_mymoney_user'

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem(userKey)),
	validToken: false
}

const userReducer = (state = {}, action) => {

	switch (action.type) {
		case type.SET_USER:
			localStorage.setItem(userKey, JSON.stringify(action.user))
			return { ...state, user: action.user, validToken: true }
		default:
			return state
	}
}


export default userReducer;