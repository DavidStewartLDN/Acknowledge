import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='ViewAchievements'
        screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
        >
        <Stack.Screen
          name='ViewAchievements'
          component={ViewAchievements}
        />
        <Stack.Screen
          name='AddAchievement'
          component={AddAchievement}
        />
        <Stack.Screen
          name='GraphAchievements'
          component={GraphAchievements}
        />
      </Stack.Navigator>
  )
}

export default MainStackNavigator