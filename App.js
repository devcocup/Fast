/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image
} from 'react-native';

import {
  Scene,
  Router,
  Drawer
} from 'react-native-router-flux';


// import SignUp from './src/screens/signUp/index';
import LogIn from './src/screens/logIn/index';
import ForgotPassword from './src/screens/forgot/index';
// import QuickStart from './src/screens/quickStart/index';
// import Home from './src/screens/home/index';
// import SideMenu from './src/screens/sidemenu/index';
// import Queue from './src/screens/queue/index';
// import Order from './src/screens/order/index';
// import Notification from './src/screens/notification/index';
// import NearBy from './src/screens/nearby/index';

// const HomeIcon = require('./src/assets/images/home_icon.png')
// const QueueIcon = require('./src/assets/images/queue_icon.png')
// const OrderIcon = require('./src/assets/images/order_icon.png')
// const NotificationIcon = require('./src/assets/images/notification_icon.png')
// const NearByIcon = require('./src/assets/images/nearby_icon.png')

class TabIcon extends Component {
  render () {
    var color = this.props.selected ? '#36D1DC' : '#5A6E82';

    return(
      <Image source={this.props.iconName} style={{width: 20, height: 20}}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene initial key="login" hideNavBar component={LogIn}/>
          {/* <Scene key="signup" hideNavBar component={SignUp}/> */}
          <Scene key="forgot" hideNavBar component={ForgotPassword}/>
          {/* <Scene key="quickstart" hideNavBar component={QuickStart}/> */}
          {/* <Drawer key="menu" hideNavBar drawerImage={require('./src/assets/images/menu_icon.png')} contentComponent={SideMenu} navTransparent={true}>
            <Scene key="tabs" tabs={true} tabBarPosition='bottom' activeTintColor={'#185A9D'} inactiveTintColor={'#5A6E82'}>
              <Scene key="home" title="Home" hideNavBar component={Home} icon={TabIcon} iconName={HomeIcon}/>
              <Scene key="queue" title="Queue" hideNavBar component={Queue} icon={TabIcon} iconName={QueueIcon}/>
              <Scene key="order" title="Order" hideNavBar component={Order} icon={TabIcon} iconName={OrderIcon}/>
              <Scene key="notification" title="Notification" hideNavBar component={Notification} icon={TabIcon} iconName={NotificationIcon}/>
              <Scene key="nearby" title="NearBy" hideNavBar component={NearBy} icon={TabIcon} iconName={NearByIcon}/>
            </Scene>
          </Drawer> */}
        </Scene>
      </Router>
    );
  }
}