import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ViewAchievements from '../screens/ViewAchievements';

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
      </Stack.Navigator>
  )
}

export default MainStackNavigator