import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header'

import Firebase from '../../config/Firebase'
import { logout } from '../redux/user/user.actions'
import { useSelector, useDispatch } from 'react-redux'

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

  // State and Refs for push notifications
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

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
        <TouchableOpacity style={styles.button} onPress={async () => {await schedulePushNotification();}}>
          <Text style={styles.buttonText}>Test push Notification</Text>
        </TouchableOpacity>
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
    color: '#fff'
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
