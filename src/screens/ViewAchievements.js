import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';

import Firebase from '../../config/Firebase'

// Access state in Redux

import { useSelector, useDispatch } from 'react-redux'

import { getachievementsfirebase, deleteachievementfirebase } from '../redux/achievements/achievements.actions'


function ViewAchievements({ navigation }) {
  const achievements = useSelector(state => state.achievements)

  const dispatch = useDispatch()
  const getAchievementsFirebase = () => dispatch(getachievementsfirebase())
  const deleteAchievementFirebase = (id) => dispatch(deleteachievementfirebase(id))

  useEffect(() => {
    getAchievementsFirebase()
  }, [])

  return (
    <>
      <View style={styles.container}>
        {achievements.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}> You have not saved any Achievements yet!</Text>
          </View>
        ) : (
          <FlatList
            data={achievements}
            renderItem={({ item }) => (
              <List.Item
                title={item.achievementTitle}
                description = {[item.selectedA.join(),',', item.selectedB.join()]}
                descriptionNumberOfLines={2}
                titleStyle={styles.listTitle}
                onPress={() => deleteAchievementFirebase(item.id)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fabAdd}
          small
          icon='plus'
          label='Add Achievement'
          onPress={() =>
            navigation.navigate('AddAchievement')
          }
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
  fabAdd: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10
  },
  listTitle: {
    fontSize: 20
  },
})

export default ViewAchievements
