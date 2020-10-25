import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';

import Header from '../components/Header'

import { BarChart } from "react-native-chart-kit";

// Access state in Redux
import { useSelector } from 'react-redux'

function GraphAchievements({ navigation, route }) {
  // const achievements = useSelector(state => state.achievements)
  const achievements = route.params.firebaseAchievements

  const [count, setCount] = useState([])
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
      console.log(partOfLifeValues)
      for (j = 0; j < partOfLifeValues.length; j++) {
        allData.push(partOfLifeValues[j])
      }
    }
    console.log(allData)
    var k;
    for (k = 0; k < partOfLife.length; k++) {
      countValues.push(countOccurrences(allData,partOfLife[k]))
    }
    setCount(countValues)
  }

  useEffect(() => {
    countLabels()
  }, []);

  const data = {
    labels: partOfLife,
    datasets: [{
      data: count
    }]
  }

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#60DBC5',
    backgroundColor: '#60DBC5',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
  }

  return (
    <>
      <Header titleText='Access' />
      <View style={styles.container}>
        <BarChart
          data={data}
          width={Dimensions.get("window").width-20} // from react-native
          height={Dimensions.get("window").height-200}
          chartConfig={chartConfig}
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

export default GraphAchievements