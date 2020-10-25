import React from 'react';
import ViewAchievements from '../screens/ViewAchievements';
import GraphAchievements from '../screens/GraphAchievements';
import Profile from '../screens/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const MaterialBottomTabs = createMaterialBottomTabNavigator();

function bottomNav() {
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Profile" component={Profile} />
      <MaterialBottomTabs.Screen name="GraphAchievements" component={GraphAchievements} />
      <MaterialBottomTabs.Screen name="ViewAchievements" component={ViewAchievements} />
    </MaterialBottomTabs.Navigator>
  )
}

  export default bottomNav