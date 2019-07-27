import * as types from '../types'
import AsyncStorage from '@react-native-community/async-storage'

const initialValue = {
    data: [],
    isLoading: false,
    isError: false,
    isFinish: false,
    isLoggedIn: false
}
    
export default (state = initialValue, action) => {
    switch (action.type) {
        case types.REGISTER:
            return {...state, isLoading: true}
        case types.REGISTER_FULFILLED:
            const token = action.payload.data.token
            AsyncStorage.setItem('token', token)
            return {...state, isLoading: false, isFinish: true, isLoggedIn: true, data: token}
        case types.REGISTER_REJECTED:
            return {...state, isLoading: false, isError: true, data: action.payload.response.data.message}
        default:
            return state
    }
}