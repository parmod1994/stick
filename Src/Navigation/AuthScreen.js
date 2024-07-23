import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import navigationString from './navigationStrings'
import * as Screens from '../Screens'
const Stack = createStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={navigationString.INITIAL_AUTH} options={{headerShown: false}} component={Screens.InitialAuth}/>
      <Stack.Screen name={navigationString.LOGIN} options={{headerShown: false}} component={Screens.Login}/>
      <Stack.Screen
                name={navigationString.SIGNUP}
                component={Screens.Signup}
                options={{ headerShown: false }}
            />
    </Stack.Navigator>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})