import * as types from '../types'
import axios from 'axios'
import { URL } from '../../component/Global'

export const getQuestion = data => {
    return {
        type: types.GET_QUESTION,
        payload: axios({
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${data.token}`,
                "content-type":"appilcation/json"
            },
            url:`${URL}question/${data.id}`,
        })
    }
}