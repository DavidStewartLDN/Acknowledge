import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import navigation from '../navigation';

import Header from '../components/Header'

function ViewAchievements({ navigation }) {
  return (
    <>
      <Header titleText='Access' />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> You have not saved any Achievements yet!</Text>
        </View>
        <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Add Achievement'
          onPress={() => navigation.navigate('AddAchievement')}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  title: {
    fontSize: 20
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10
  }
})

export default ViewAchievements