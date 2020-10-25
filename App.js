import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Provider as PaperProvider} from 'react-native-paper';

// Likely remove App Navigator once finishing updating react-navigation to V.5
import AppNavigator from './src/navigation';
// Main App Screens
import ViewAchievements from './src/screens/ViewAchievements';
import AddAchievement from './src/screens/AddAchievement';
import GraphAchievements from './src/screens/GraphAchievements';
import Profile from './src/screens/Profile';

// Authentication Screens
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
// Replaces createAppContainer from react-navigation V.4
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'

const AuthStack = createStackNavigator()
const AchievementStack = createStackNavigator()
const GraphStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

import { Provider } from 'react-redux'

import store from './src/redux/store'

function AuthenticationStackScreen() {
  return (
      <AuthStack.Navigator
        initialRouteName='ViewAchievements'
        screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
        >
          <AuthStack.Screen
            name='Login'
            component={Login}
          />
          <AuthStack.Screen
            name='Signup'
            component={Signup}
          />
      </AuthStack.Navigator>

  ) }

  function AchievementsStackScreen() {
    return (
      <AchievementStack.Navigator 
      screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
      >

      <AchievementStack.Screen
          name='ViewAchievements'
          component={ViewAchievements}
        />
      <AchievementStack.Screen
        name='AddAchievement'
        component={AddAchievement}
      />
      </AchievementStack.Navigator>
    );
  }

function GraphStackScreen() {
  return (
    <GraphStack.Navigator
    screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
        >
    <GraphStack.Screen
      name='Graph Achievements'
      component={GraphAchievements}
    />
    </GraphStack.Navigator>
  );
}

function BottomTabs() {
  return(
    <Tab.Navigator
      initialRouteName="ViewAchievements"
      shifting={true}
      sceneAnimationEnabled={true}
      tabBarOptions={{
        activeTintColor: '#42f44b',
      }}>
      <Tab.Screen
        name="ViewAchievements"
        component={AchievementsStackScreen}
        options={{
          tabBarLabel: 'Achievements',
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="GraphAchievements"
        component={GraphStackScreen}
        options={{
          tabBarLabel: 'Graph',
          tabBarIcon: 'chart-bar',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: 'account'
        }}
      />
    </Tab.Navigator>
  )
}

function MainStackNavigator() {
  const user = useSelector(state => state.user)
  return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
        >
        {user.uid == undefined ? (
          <Stack.Screen
            name='AuthenticationStackScreen'
            component={AuthenticationStackScreen}
          />
        ) : (
            <Stack.Screen
              name='Bottom'
              component={BottomTabs}
            />
        ) }
      </Stack.Navigator>
  )
}

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
export default App;
