import { UserActionTypes } from './user-action-types'

const INITIAL_STATE = {
    currentUser: {
        address_line1: '',
        address_line2: '',
        country: '',
        state: '',
        city: ''
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return { ...state, currentUser: action.payload }
        case UserActionTypes.REMOVE_USER:
            return state
        default:
            return state;
    }
}

export default userReducer