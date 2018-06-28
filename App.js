/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  ActionConst
} from 'react-native-router-flux';

import Start from './src/screens/start/index'

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene initial key="start" hideNavBar component={Start}/>
        </Scene>
      </Router>
    );
  }
}