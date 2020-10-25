import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// Main App Screens
import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';
import Profile from '../screens/Profile';

import { useSelector } from 'react-redux'

// Importing Navigators
import AuthenticationStack from './AuthenticationStack'
import AchievementsStack from './AchievementsStack'

const AchievementStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()




function MainAppBottomTabNavigator() {
  return(
    <Tab.Navigator
      initialRouteName="ViewAchievements"
      shifting={true}
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: '#60DBC5' }}
      activeColor="#f0edf6"
      inactiveColor='#2E7166'
      >
      <Tab.Screen
        name="ViewAchievements"
        component={AchievementsStack}
        options={{
          tabBarLabel: 'Achievements',
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="GraphAchievements"
        component={GraphAchievements}
        options={{
          tabBarLabel: 'Graph',
          tabBarIcon: 'chart-bar',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: 'account'
        }}
      />
    </Tab.Navigator>
  )
}

function FullAppNavigator() {
  const user = useSelector(state => state.user)
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false
      }}
      >
      {user.uid == undefined ? (
        <Stack.Screen
          name='AuthenticationStack'
          component={AuthenticationStack}
        />
      ) : (
        <Stack.Screen
          name='MainAppBottomTabNavigator'
          component={MainAppBottomTabNavigator}
        />
      ) }
    </Stack.Navigator>
  )
}

export default FullAppNavigator;
