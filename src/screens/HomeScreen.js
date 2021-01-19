import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import PieChartWithDynamicSlices from '../components/PieChartWithDynamicSlices';
import StackedBarChart from '../components/StackedBarChart'

import { useSelector } from 'react-redux';
import AchievementsCarousel from '../components/AchievementsCarousel';
import { Button } from 'react-native';

function HomeScreen({navigation}) {

  const achievements = useSelector(state => state.achievements)
  
  const [count, setCount] = useState([0,0,0,0])
  const partOfLife = ["Work", "Self", "Play", "Living"]
  // const satisfier = ["Health, Wellbeing, Fitness","Creating","New Developments","Giving"]
  
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  
  const countLabels = () => {
    const allData = []
    const countValues = []
    var i;
    for (i = 0; i < achievements.length; i++) {
      var j;
      const partOfLifeValues = achievements[i].selectedA
      for (j = 0; j < partOfLifeValues.length; j++) {
        allData.push(partOfLifeValues[j])
      }
    }
    var k;
    for (k = 0; k < partOfLife.length; k++) {
      countValues.push(countOccurrences(allData,partOfLife[k]))
    }
    setCount(countValues)
  }
  
  useEffect(() => {
    countLabels()
  }, [achievements]);

  const graphColors = ['#9352EB', '#EB5A23', '#3BEBCA', '#EBE62F']

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to Acknowledge</Text>
        </View>
      </View>
      <PieChartWithDynamicSlices data={count} labels={partOfLife} colors={graphColors} />
      <AchievementsCarousel data={achievements}/>
      <Button title='Add Achievement' onPress={() =>
        navigation.navigate('AddAchievement') 
       }
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  body: {
    fontSize: 20,
    textAlign: 'justify'
  },
  title: {
    fontSize: 45,
    marginBottom: 0,
    textAlign: 'center'
  },
})

export default HomeScreen
