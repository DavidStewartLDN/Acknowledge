import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, FAB, List, IconButton } from 'react-native-paper';

import Header from '../components/Header'
import Firebase from '../../config/Firebase'

// Access state in Redux
import { useSelector, useDispatch } from 'react-redux'
import { addachievement, deleteachievement} from '../redux/achievements/achievements.actions'

function ViewAchievements({ navigation }) {
  const achievements = useSelector(state => state.achievements)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const addAchievement = achievement => dispatch(addachievement(achievement))
  const deleteAchievement = id => dispatch(deleteachievement(id))

  const handleSignout = () => {
    Firebase.auth().signOut()
    navigation.navigate('Login')
  }

  console.log(achievements)
  return (
    <>
      <Header titleText='Access' />
      <IconButton
        icon='logout'
        size={25}
        color='white'
        onPress={handleSignout}
        style={styles.iconButton}
      />
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
                title={item.achievement.achievementTitle}
                description = {[item.achievement.selectedA.selectedArrayPartOfLife.join(),",", item.achievement.selectedB.selectedArraySatisfier.join()]}
                descriptionNumberOfLines={2}
                titleStyle={styles.listTitle}
                onPress={() => deleteAchievement(item.id)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fabGraph}
          small
          icon='chart-bar'
          label='View Graph'
          onPress={() =>
            navigation.navigate('GraphAchievements')
        }
        />
        <FAB
          style={styles.fabAdd}
          small
          icon='plus'
          label='Add Achievement'
          onPress={() =>
            navigation.navigate('AddAchievement', {
              addAchievement
          })
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
  fabGraph: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 80
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
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
  },
})

export default ViewAchievements