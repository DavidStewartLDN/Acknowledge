import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, TextInput, FAB, Text } from 'react-native-paper';

import Checkbox from "../components/checkbox";

import Header from '../components/Header'

function AddAchievement({ navigation }) {
  const [achievementTitle, setAchievementTitle] = useState('')
  const [achievementValue, setAchievementValue] = useState('')
  const [checked, setChecked] = useState('')
  const [selected, setSelected] = useState({prop1: 'prop1Value', prop2: 'prop2Value', child: {childProp1: 'childProp1Value'}})

  function onSaveAchievement() {
    navigation.state.params.addAchievement({ achievementTitle, achievementValue })
    navigation.goBack()
  }

  const [count, setCount] = useState(0);
  console.log(count);
  console.log(selected);

  const showCount = count;

  const incrementCount = (isSelected) => {
    isSelected ? setCount(count - 1) : setCount(count + 1);
  };

  const saveSelected = (isSelected) => {
    setSelected({...setState, david: isSelected });
  };
  
  return (
    <>
      <Header titleText='Add an Achievement' />
      <IconButton
        icon='close'
        size={25}
        color='white'
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label='Add Title Here'
          value={achievementTitle}
          mode='outlined'
          onChangeText={setAchievementTitle}
          style={styles.title}
        />
        <Checkbox
            label="Work"
            incrementCount={incrementCount}
            saveSelected={saveSelected}
          />
          <Checkbox
            label="Self"
            incrementCount={incrementCount}
          />
          <Checkbox
            label="Play"
            incrementCount={incrementCount}
          />
          <Checkbox
            label="Living"
            incrementCount={incrementCount}
          />
        <FAB
          style={styles.fab}
          small
          icon='check'
          disabled={achievementTitle == '' ? true : false}
          onPress={() => onSaveAchievement()}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  text: {
    height: 300,
    fontSize: 16
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0
  }
})

export default AddAchievement