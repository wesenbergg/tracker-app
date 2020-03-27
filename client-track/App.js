import React from 'react'
import {  createAppContainer,
          createSwitchNavigator,
        } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider } from './src/context/BlogContext'
import HomeScreen from './src/screens/HomeScreen'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Account: AccountScreen,
    Create: TrackCreateScreen,
    trackListFlow: createStackNavigator({
      Detail: TrackDetailScreen,
      List: TrackListScreen
    })
  })
})
/*
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Account: AccountScreen,
    Create: TrackCreateScreen,
    Detail: TrackDetailScreen,
    List: TrackListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Tracker app"
    }
  }
)*/

const App = createAppContainer(switchNavigator)

export default () => {
  return(
    <Provider>
      <App />
    </Provider>
  )
}