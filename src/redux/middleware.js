import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'

const middlewares = [];

const reactNavigation = createReactNavigationReduxMiddleware(
    state => state.router,
)

middlewares.push(createLogger())
middlewares.push(reactNavigation)
middlewares.push(promise)

export default middlewares;