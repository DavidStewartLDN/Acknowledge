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
        headerShown: true
      }}>
      <Stack.Screen
          name='ViewAchievements'
          component={ViewAchievements}
          options={{
            title: 'Acknowledge',
          }}
        />
      <Stack.Screen
        name='AddAchievement'
        component={AddAchievement}
        options={{
          title: 'Add an Achievement',
        }}
      />
    </Stack.Navigator>
  );
}

export default AchievementsStack