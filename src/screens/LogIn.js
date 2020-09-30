import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, FAB, TextInput} from 'react-native-paper';

import Header from '../components/Header'


function LogIn({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Header titleText='Access' />
      <View style={styles.container}>
        <TextInput
          label='Username'
          value={username}
          mode='outlined'
          onChangeText={setUsername}
          style={styles.title}
        />
        <FAB
          style={styles.fabAdd}
          small
          icon='plus'
          label='Skip'
          onPress={() =>
            navigation.navigate('ViewAchievement', {})
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
  }
})

export default LogIn