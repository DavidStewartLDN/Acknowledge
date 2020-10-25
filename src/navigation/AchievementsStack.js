import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';

const Stack = createStackNavigator()

function AchievementsStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
        gestureEnabled: true,
        headerShown: false
      }}>
      <Stack.Screen
          name='ViewAchievements'
          component={ViewAchievements}
        />
      <Stack.Screen
        name='AddAchievement'
        component={AddAchievement}
      />
    </Stack.Navigator>
  );
}

export default AchievementsStack