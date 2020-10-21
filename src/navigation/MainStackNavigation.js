import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// Main App Screens
import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';
import GraphAchievements from '../screens/GraphAchievements';
import Profile from '../screens/Profile';
//import bottomNav from '../screens/bottomNav'

// Authentication Screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';

// Access to read Redux store for user.uid
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator();

// const BottomNav = createBottomTabs();

// function bottomNav() {
//   return (

//   )
// }

function MainStackNavigator() {
  const user = useSelector(state => state.user)
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
        </>) : (

          <>


            <Stack.Screen
              name='AddAchievement'
              component={AddAchievement}
            />

          </>
        ) }
      </Stack.Navigator>,       <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Profile" component={Profile} />
      <MaterialBottomTabs.Screen name="Graph" component={GraphAchievements} />
      <MaterialBottomTabs.Screen name="View Achievements" component={AddAchievement, ViewAchievements}/>
      {/* <MaterialBottomTabs.Screen name="ViewAchievements" component={AddAchievement} /> */}
      </MaterialBottomTabs.Navigator>
  )


}

export default MainStackNavigator
