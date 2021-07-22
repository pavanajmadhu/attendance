import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Screen2 from './screens/Screen2'





export default class App extends React.Component {
  render() {
    return (
      <View>
       <AppContainer/>
      </View>
    );
  }
}
 
var AppNavigator=createSwitchNavigator({ 
  Screen2:Screen2




})
const AppContainer=createAppContainer(AppNavigator) 
