import React from 'react';
import { StyleSheet, View} from 'react-native';
import { IconButton, Text, FAB, List } from 'react-native-paper';

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
      <IconButton
        icon='close'
        size={25}
        color='white'
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}> No Graph here yet!</Text>
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
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
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