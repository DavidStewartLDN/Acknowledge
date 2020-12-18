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


  let counter = 0;
function ViewAchievements({ navigation }) {
  const [startDate, setStartDate] = useState('2020-11-27')
  const [customMarkedDates, setMarkedDates] = useState({})
   
  const dateSelector = (date) => {
      
    if(counter === 0) {
        setMarkedDates({ [date.dateString]: { color: '#50cebb', textColor: 'white' } })
        setStartDate(date.dateString)
        counter ++
    } else if (counter === 1 && (date.dateString) === startDate) {
        setMarkedDates({ 
            [date.dateString]: { startingDay: true, color: '#50cebb', textColor: 'white', endingDay: true }
        })
        counter = 0;
    } else {
        let arr = [];
        var getDaysArray = function (start, end) {
            for (var dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
                arr.push(convertDate(dt));
            }
        };

        getDaysArray(startDate, date.dateString)

        setMarkedDates(arr.reduce((a, b) => (a[b] = { color: '#70d7c7', textColor: 'white' }, a), {}))
        counter = 0;
    }
  }

  const convertDate = (date) => {
      var day = ("0" + date.getDate()).slice(-2);
      var month = ("0" + (date.getMonth() + 1)).slice(-2);
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
  const selectAchievements = (state) => state.achievements.filter(achievement => convertDate(new Date(getMS(achievement.createdAt))) === startDate);
  const achievements = useSelector(selectAchievements)
  console.log(achievements)
console.log(startDate)

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

        onDayPress={(day) => {
          dateSelector(day)
        }}
         
        markedDates={customMarkedDates}
        markingType={'period'}

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
