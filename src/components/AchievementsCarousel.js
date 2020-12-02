import React, { useRef, useState, Component} from "react";
import { Animated,Easing, Text, View, StyleSheet, Button } from "react-native";

class AchievementsCarousel extends Component {

  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  infiniteLoop = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        easing: Easing.inOut(Easing.sin),
        duration: 1000,
        useNativeDriver: true
        }),
        Animated.delay(1000),
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          easing: Easing.inOut(Easing.sin),
          duration: 1000,
          useNativeDriver: true
        }),
      ])).start();
  };

  // setCurrentAchievement(props.data[Math.floor(Math.random() * props.data.length)].achievementTitle)

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: this.state.fadeAnim // Bind opacity to animated value
            }
          ]}
        >
          <Text style={styles.fadingText}>Potato</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Infinite" onPress={this.infiniteLoop} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});

export default AchievementsCarousel;