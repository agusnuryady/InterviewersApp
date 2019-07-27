import { createAppContainer, createStackNavigator } from 'react-navigation'
import Test from '../screens/Test/Test'
import Splashscreen from '../screens/Splashscreen/Splashscreen'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import Menu from '../screens/Home/Menu'
import Home from '../screens/Home/Home'
import Question from '../screens/Question/Question'

const AppNavigation = createStackNavigator({
    Test:Test,
    Splashscreen:Splashscreen,
    Login:Login,
    Register:Register,
    Menu:Menu,
    Home:Home,
    Question:Question
}, {
    initialRouteName: 'Splashscreen',
    headerMode: 'none'
})

export default createAppContainer(AppNavigation)