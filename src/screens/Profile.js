import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native'
import Header from '../components/Header'

import Firebase from '../../config/Firebase'
import { logout } from '../redux/user/user.actions'
import { useSelector, useDispatch } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker';

// Imports for Push Notifications

import * as Notifications from 'expo-notifications';
import { schedulePushNotification, registerForPushNotificationsAsync } from '../notifications/pushNotifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function Profile(){
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const logOut = () => dispatch(logout())
  const [date, setDate] = useState(new Date(51730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  let [hours, setHours] = useState(12)
  let [minutes, setMinutes] = useState(0)

  // State and Refs for push notifications
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let d = new Date(selectedDate)
    hours = d.getHours()
    minutes = d.getMinutes()
    console.log(hours)
    console.log(minutes);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

    const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const handleSignout = () => {
    Firebase.auth().signOut()
    logOut()
  }
  
  return (
    <>
      <Header titleText='Access' />
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>{user.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignout}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={async () => {await schedulePushNotification(hours, minutes);}}>
          <Text style={styles.buttonText}>Test push Notification</Text>
        </TouchableOpacity>
        <View>
                <View>
        {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
      {/* <View>schedulePushNotification minutes={minutes}</View> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#60DBC5',
    borderColor: '#60DBC5',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
  },
})



export default Profile
