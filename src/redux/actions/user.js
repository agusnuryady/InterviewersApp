import * as types from '../types'
import axios from 'axios'
import { URL } from '../../component/Global'

export const getUser = token => {
    return {
        type: types.GET_USER,
        payload: axios.get(`${URL}profile`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
    }
}