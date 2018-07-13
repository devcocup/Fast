import React from 'react';

import { Image } from 'react-native';

import {
    StackNavigator,
    TabNavigator, 
    DrawerNavigator
} from 'react-navigation';

import SignUp from './screens/signUp/index';
import LogIn from './screens/logIn/index';
import ForgotPassword from './screens/forgot/index';
import Verify from './screens/verify/index';
import QuickStart from './screens/quickStart/index';
import Home from './screens/home/index';
import SideMenu from './screens/sidemenu/index';
import Queue from './screens/queue/index';
import Scan from './screens/scan/index';
import Bill from './screens/bill/index';
import NearBy from './screens/nearby/index';
import Profile from './screens/profile/index';
import EditProfile from './screens/editProfile/index';
import Following from './screens/following/index';
import OrderHistory from './screens/orderHistory/index';
import Rewards from './screens/rewards/index';
import Discover from './screens/discover/index';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
    },
    Discover: {
        screen: Discover
    }
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
})

const TabStack = TabNavigator({
    HomeTab: { 
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => focused ? <Image source={require('./assets/images/tab_home_selected_icon.png')} /> : <Image source={require('./assets/images/tab_home_icon.png')} />,
        }
    },
    
    Scan: { 
        screen: Scan,
        navigationOptions: {
            tabBarLabel: 'Scan',
            tabBarIcon: ({ focused }) => focused ? <Image source={require('./assets/images/tab_scan_selected_icon.png')} /> : <Image source={require('./assets/images/tab_scan_icon.png')} />,
        }
    },
    
    Queue: { 
        screen: Queue,
        navigationOptions: {
            tabBarLabel: 'Queue',
            tabBarIcon: ({ focused }) => focused ? <Image source={require('./assets/images/tab_queue_selected_icon.png')} /> : <Image source={require('./assets/images/tab_queue_icon.png')} />,
        }
    },
    
    Bill: { 
        screen: Bill,
        navigationOptions: {
            tabBarLabel: 'View Bill',
            tabBarIcon: ({ focused }) => focused ? <Image source={require('./assets/images/tab_bill_selected_icon.png')} /> : <Image source={require('./assets/images/tab_bill_icon.png')} />,
        }
    },
    
    NearBy: { 
        screen: NearBy,
        navigationOptions: {
            tabBarLabel: 'NearBy',
            tabBarIcon: ({ focused }) => focused ? <Image source={require('./assets/images/tab_nearby_selected_icon.png')} /> : <Image source={require('./assets/images/tab_nearby_icon.png')} />,
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#1F81CE',
        inactiveTintColor: '#5A6E82',
        showIcon: true,
        showLabel: true,
        renderIndicator: () => null,
        labelStyle: {
            fontFamily: 'Ubuntu-R',
            fontSize: 10,
            paddingTop: 0,
            marginTop: 0
        },
        iconStyle: {
            padding: 0,
            margin: 0,
            width: 40,
            height: 40
        },
        tabStyle: {
            height: 60,
            padding: 0
        },
        style: {
            backgroundColor: 'white'
        }
    },
    initialRouteName: 'HomeTab'
})

const DrawerStack = DrawerNavigator({
    TabBar: { screen: TabStack },
    ProfileScreen: { screen: Profile },
    OrderHistoryScreen: { screen: OrderHistory },
    FollowingScreen: { screen: Following },
    RewardsScreen: { screen: Rewards },
    EditProfileScreen: { screen: EditProfile }
}, {
    drawerPosition: 'left',
    contentComponent: SideMenu,
    initialRouteName: 'TabBar',
    width: 300
})

const AuthenticationStack = StackNavigator({
    LogInScreen: LogIn,
    SignUpScreen: SignUp,
    ForgotPasswordScreen: ForgotPassword,
    QuickStartScreen: QuickStart,
    VerifyScreen: Verify,
}, {
    headerMode: 'none',
    initialRouteName: 'LogInScreen'
});

export const AppNavigation = StackNavigator({
    Auth: { screen: AuthenticationStack },
    Menu: { screen: DrawerStack }
}, {
    headerMode: 'none',
    initialRouteName: 'Auth'
})