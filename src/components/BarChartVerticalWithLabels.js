import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'


function BarChartVerticalWithLabels(props) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  console.log(props.data)


  const data = props.data

  const CUT_OFF = 20
  const Labels = ({ x, y, bandwidth, data }) => (
    data.map((value, index) => (
      <Text
        key={ index }
        x={ x(index) + (bandwidth / 2) }
        y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
        fontSize={ 14 }
        fill={ value >= CUT_OFF ? 'white' : 'black' }
        alignmentBaseline={ 'middle' }
        textAnchor={ 'middle' }
      >
        {value}
      </Text>
    ))
  )

  return (
    <View style={{ flexDirection: 'row', height: useWindowDimensions().height - 180, paddingVertical: 16 }}>
      <BarChart
        style={{ flex: 1 }}
        data={data}
        svg={{ fill: 'rgba(46, 113, 102, 0.8)' }}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        gridMin={0}
      >
      <Labels/>
      </BarChart>
    </View>
  )

}

export default BarChartVerticalWithLabels
