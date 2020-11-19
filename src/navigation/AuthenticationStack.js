import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login';
import Signup from '../screens/Signup';

const AuthStack = createStackNavigator()

function AuthenticationStack() {
  return (
    <AuthStack.Navigator
      initialRouteName='ViewAchievements'
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        headerStyle: {
          backgroundColor: '#60DBC5',
        },
        headerTintColor: '#2E7166',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: '600'
        },
      }}>
      <AuthStack.Screen
        name='Login'
        component={Login}
      />
      <AuthStack.Screen
        name='Signup'
        component={Signup}
      />
    </AuthStack.Navigator>
  )
}

export default AuthenticationStack;