import {combineReducers} from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigation from '../../navigation/AppNavigation'
import login from './login'
import register from './register'
import user from './user'
import group from './group'
import groups from './groups'
import question from './question'

const router = createNavigationReducer(AppNavigation)

const appReducer = combineReducers({
    router,
    login,
    register,
    user,
    group,
    groups,
    question
})

export default appReducer