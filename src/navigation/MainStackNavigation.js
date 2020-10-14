import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';

import { useSelector } from 'react-redux'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';

const Stack = createStackNavigator()

function MainStackNavigator() {
  const user = useSelector(state => state.user)
  console.log(user.uid)
  return (
      <Stack.Navigator
        initialRouteName='ViewAchievements'
        screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
        >
        {user.uid == undefined ? (<>
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
          />
        </>) : (
          <>
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
          </>
        ) }
      </Stack.Navigator>
  )
}

export default MainStackNavigator