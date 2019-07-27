import * as types from '../types'
import axios from 'axios'
import { URL } from '../../component/Global'

export const getGroups = token => {
    return {
        type: types.GET_GROUPS,
        payload: axios.get(`${URL}groups`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
    }
}

export const getGroup = data => {
    return {
        type: types.GET_GROUP,
        payload: axios({
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${data.token}`,
                "content-type":"appilcation/json"
            },
            url:`${URL}group/${data.id}`,
        })
    }
}

export const getCodeGroup = data => {
    return {
        type: types.GET_GROUP,
        payload: axios({
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${data.token}`,
                "content-type":"appilcation/json"
            },
            url:`${URL}codeGroup/${data.code}`,
        })
    }
}