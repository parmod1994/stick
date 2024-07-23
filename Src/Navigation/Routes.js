import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import AuthScreen from './AuthScreen';
const Stack = createStackNavigator();
import { useDispatch, useSelector } from "react-redux";

const Routes = () => {

  const isLogin = useSelector((store)=>store.auth.isLogin)
  
  return (
    <NavigationContainer>
      {
        isLogin ? <Main /> :
        <AuthScreen />
      }
           
         
          
    
  </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})