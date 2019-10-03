import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/navigation/modules/reducers';

import Login from "./src/navigation/screens/Login";
import Home from './src/navigation/screens/Home';
import Screen2 from './src/navigation/screens/Screen2';
import Screen3 from './src/navigation/screens/Screen3';
import Screen1 from './src/navigation/screens/Screen1';
import Screen4 from './src/navigation/screens/Screen4';

//====================================================================================================
//  stackChild < tab < stack < switch
//====================================================================================================

const homeStack = createStackNavigator({
  HOME_SC: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },

  SCREEN1: {
    screen: Screen1,

    // navigationOptions: {
    //   header: null,
      
    // }
  },
});

const tab = createBottomTabNavigator({
  HOME_SC: {
    screen: homeStack,
  },

  SCREEN2: {
    screen: Screen2,
  },

  SCREEN3: {
    screen: Screen3,
  },
},
  {

    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      showIcon: false,
      indicatorStyle: {
        backgroundColor: 'blue',
      },
      tabStyle: {
        borderRightColor: '#bbbbbb',
        borderRightWidth: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        borderTopColor: 'blue',
      },
    }
  },
);

const stack = createStackNavigator({
  tab: {
    screen: tab,
    navigationOptions: {
      header: null,
      // title: 'Training'
    }
  },

  SCREEN4: {
    screen: Screen4,
  }
});

const switchNav = createSwitchNavigator({
  LOGIN_SC: {
    screen: Login,
    navigationOptions: {
      title: 'Login Screen'
    }
  },

  stack,
});

const Container = createAppContainer(switchNav);

let store = createStore(reducers);
const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;