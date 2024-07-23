import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Screens/Home/Home'
import Profile from '../Screens/Profile/Profile'
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './TabRoutes';
import navigationStrings from './navigationStrings';
const Stack = createStackNavigator();

const Main = () => {
 
  return (
    <Stack.Navigator>
    <Stack.Screen name={navigationStrings.TAB_ROUTES} options={{ headerShown: false }} component={TabRoutes}/>
    
      
      </Stack.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})