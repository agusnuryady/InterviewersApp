import * as types from '../types'

const initialValue = {
    data: [],
    isLoading: true,
    isError: false,
    isFinish: false,
    isLoggedIn: false
}

export default (state = initialValue, action) => {
    switch (action.type) {
        case types.GET_QUESTION:
            return {...state, isLoading: true}
        case types.GET_QUESTION_FULFILLED:
            return {...state, isLoading: false, isFinish: true, isLoggedIn: true, data: action.payload.data}
        case types.GET_QUESTION_REJECTED:
            return {...state, isLoading: false, isError: true, data: action.payload.response.data.message}
        default:
            return state
    }
}