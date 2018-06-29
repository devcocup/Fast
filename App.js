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
  Drawer
} from 'react-native-router-flux';

import Start from './src/screens/start/index';
import SignUp from './src/screens/signUp/index';
import LogIn from './src/screens/logIn/index';
import ForgotPassword from './src/screens/forgot/index';
import QuickStart from './src/screens/quickStart/index';
import Home from './src/screens/home/index';
import SideMenu from './src/screens/sidemenu/index';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene initial key="start" hideNavBar component={Start}/>
          <Scene key="signup" hideNavBar component={SignUp}/>
          <Scene key="login" hideNavBar component={LogIn}/>
          <Scene key="forgot" hideNavBar component={ForgotPassword}/>
          <Scene key="quickstart" hideNavBar component={QuickStart}/>
          <Drawer key="menu" hideNavBar drawerImage={require('./src/assets/images/menu_icon.png')} contentComponent={SideMenu}>
            <Scene key="home" hideNavBar component={Home}/>
          </Drawer>
        </Scene>
      </Router>
    );
  }
}