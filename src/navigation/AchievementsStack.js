import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet} from 'react-native';

import ViewAchievements from '../screens/ViewAchievements';
import AddAchievement from '../screens/AddAchievement';

import { IconButton } from 'react-native-paper';

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
          headerRight: () => (
            <IconButton
              icon='close'
              size={25}
              color='white'
              onPress={() => navigation.goBack()}
              style={styles.iconButton}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)'
  }
})

export default AchievementsStack