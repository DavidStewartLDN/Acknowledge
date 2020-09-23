import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, FAB, List } from 'react-native-paper';

import Header from '../components/Header'

// Access state in Redux
import { useSelector, useDispatch } from 'react-redux'

function ViewAchievements({ navigation }) {
  const achievements = useSelector(state => state)

  const dispatch = useDispatch()

  console.log(achievements)
  return (
    <>
      <Header titleText='Access' />
      <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}> You have not saved any Achievements yet!</Text>
          </View>
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
  },
  listTitle: {
    fontSize: 20
  }
})

export default ViewAchievements