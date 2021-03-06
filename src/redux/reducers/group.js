import * as types from '../types'

const initialValue = {
    data: [],
    isLoading: false,
    isError: false,
    isFinish: false,
    isLoggedIn: false
}

export default (state = initialValue, action) => {
    switch (action.type) {
        case types.GET_GROUP:
            return {...state, isLoading: true}
        case types.GET_GROUP_FULFILLED:
            return {...state, isLoading: false, isFinish: true, isLoggedIn: true, data: action.payload.data}
        case types.GET_GROUP_REJECTED:
            return {...state, isLoading: false, isError: true, data: action.payload.response.data.message}
        default:
            return state
    }
}