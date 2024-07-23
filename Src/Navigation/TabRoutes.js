import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import * as Screens from "../Screens";
import navigationStrings from "./navigationStrings";
import imagePath from "../constants/imagePath";
import colors from '../styles/colors'

const Tab = createBottomTabNavigator();

const TabRoutes = (props) => {
  return (
    <Tab.Navigator
            tabBar={(tabsProps) => (
               
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}

            screenOptions={{
                headerShown: false,
               
                tabBarActiveTintColor: colors.whiteColor,
                tabBarInactiveTintColor: 'black',
                tabBarStyle:{backgroundColor:'gray'}
                // tabBarShowLabel: false
            }}

        >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.firstActiveIcon} />
            ) : (
              <Image source={imagePath.firstInActiveIcon} />
            );
          },
         
          
        }}
      />

     
      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Screens.Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.secondActiveIcon} />
            ) : (
              <Image source={imagePath.secondInActiveIcon} />
            );
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.POST}
        component={Screens.Post}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.thirdActiveIcon} />
            ) : (
              <Image source={imagePath.thirdInActiveIcon} />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Screens.Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.fourthActiveIcon} />
            ) : (
              <Image source={imagePath.fourthInActiveIcon} />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.fifthActiveIcon} />
            ) : (
              <Image source={imagePath.fifthInActiveIcon} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;

const styles = StyleSheet.create({});
