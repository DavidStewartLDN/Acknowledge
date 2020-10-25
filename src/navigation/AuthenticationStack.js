import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

// Authentication Screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const AuthStack = createStackNavigator()

function AuthenticationStack() {
  return (
    <AuthStack.Navigator
      initialRouteName='ViewAchievements'
      screenOptions={{
        gestureEnabled: true,
        headerShown: false
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