import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import GraphAchievements from '../screens/GraphAchievements';

const Stack = createStackNavigator()

function GraphStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        headerStyle: {
          backgroundColor: '#60DBC5',
        },
        headerTintColor: '#2E7166',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: '600',
        },
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen
          name='GraphAchievements'
          component={GraphAchievements}
          options={{
            title: 'Acknowledge',
          }}
        />
    </Stack.Navigator>
  );
}

export default GraphStack