import React, {Component} from 'react';
import {Provider, connect} from 'react-redux'
import {createReduxContainer} from 'react-navigation-redux-helpers'
import AppNavigation from './src/navigation/AppNavigation'
import store from './src/redux/store'
import ReduxNavigation from "./src/redux/ReduxNavigation"

export const Nav = createReduxContainer(AppNavigation, 'root')

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <ReduxNavigation/>
      </Provider>
    );
  }
}