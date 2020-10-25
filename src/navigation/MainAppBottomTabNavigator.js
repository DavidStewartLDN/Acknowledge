import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import GraphAchievements from '../screens/GraphAchievements';
import Profile from '../screens/Profile';
import AchievementsStack from './AchievementsStack'

const Tab = createMaterialBottomTabNavigator();

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

export default MainAppBottomTabNavigator;