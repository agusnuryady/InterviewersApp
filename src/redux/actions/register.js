import * as types from '../types'
import axios from 'axios'
import { URL } from '../../component/Global'

export const register = newUser => {
    return {
        type: types.REGISTER,
        payload: axios.post(`${URL}apply`, newUser)
    }
}