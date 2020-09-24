import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { IconButton, Text, FAB, List } from 'react-native-paper';

import Header from '../components/Header'

import {
  BarChart,
} from "react-native-chart-kit";

// Access state in Redux
import { useSelector, useDispatch } from 'react-redux'

function ViewAchievements({ navigation }) {
  const achievements = useSelector(state => state)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 43 ]
    }]
  }

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
  }

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
      <BarChart
        data={data}
        width={Dimensions.get("window").width-20} // from react-native
        height={600}
        chartConfig={chartConfig}
      />
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