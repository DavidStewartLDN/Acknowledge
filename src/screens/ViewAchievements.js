import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Header from '../components/Header'
import Firebase from '../../config/Firebase'
// import Calendar from '../components/Calendar'
// Access state in Redux

import { useSelector, useDispatch } from 'react-redux'

import { getachievementsfirebase, deleteachievementfirebase, addachievementfirebase } from '../redux/achievements/achievements.actions'



function ViewAchievements({ navigation }) {
  const [selectedDate, setDate] = useState('2020-11-27');
  
  const selectDate = (date) => {
    setDate(date.dateString)
  };

  const convertDate = (date) => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear()
    return year + '-' + month + '-' + day
  }

  const getMS = (date) => {
    if (date != null ) {
      return date.toMillis();
    }
    else {
      date = new Date()
      return date.getTime();
    }
  }

  // const selectAchievements = (state) => state.achievements.filter(achievement => achievement.createdAt.seconds === seconds);
  const selectAchievements = (state) => state.achievements.filter(achievement => convertDate(new Date(getMS(achievement.createdAt))) === selectedDate);
  const achievements = useSelector(selectAchievements)
  console.log(achievements)


  const dispatch = useDispatch()
  const getAchievementsFirebase = () => dispatch(getachievementsfirebase())
  const deleteAchievementFirebase = (id) => dispatch(deleteachievementfirebase(id))
  const addAchievementFirebase = (achievement) => dispatch(addachievementfirebase(achievement))

  useEffect(() => {
    getAchievementsFirebase()
  }, [])
  
  return (
    <>
      <Header titleText='Access' />
      <Calendar
        onDayPress={(day) => {selectDate(day)}}
      />
      <View style={styles.container}>
        {achievements.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}> No achievements saved on selected day</Text>
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
            navigation.navigate('AddAchievement', {
              addAchievementFirebase
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
