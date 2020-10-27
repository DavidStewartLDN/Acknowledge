import React, { useState, useEffect, useRef } from 'react';
import { Provider as PaperProvider} from 'react-native-paper';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import FullAppNavigator from './src/navigation/FullAppNavigator';

// Redux
import { Provider } from 'react-redux'
import store from './src/redux/store'

// Push notifications
import * as Notifications from 'expo-notifications';
import { Text, View, Button, Platform } from 'react-native';
import { sendPushNotification, registerForPushNotificationsAsync } from './src/components/pushNotifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
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

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications



// function App() {
//   return (
//     <Provider store={store}>
//       <PaperProvider>
//         <NavigationContainer>
//           <FullAppNavigator />
//         </NavigationContainer>
//       </PaperProvider>
//     </Provider>
//   );
// }

// export default App;
