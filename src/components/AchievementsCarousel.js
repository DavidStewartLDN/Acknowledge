import React, { useRef } from "react";
import { Animated,Easing, Text, View, StyleSheet, Button } from "react-native";

const AchievementsCarousel = () => {

  const initialOpacity = 0;
  const maxOpacity = 1;
  const standardTime = 4000;
  const delayTime = 5000;
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(initialOpacity)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  const infiniteLoop = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
        toValue: maxOpacity,
        easing: Easing.inOut(Easing.sin),
        duration: standardTime,
        useNativeDriver: true
        }),
        Animated.delay(delayTime),
        Animated.timing(fadeAnim, {
          toValue: initialOpacity,
          easing: Easing.inOut(Easing.sin),
          duration: standardTime,
          useNativeDriver: true
        }),
      ])).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
        <Button title="Infinite" onPress={infiniteLoop} />
      </View>
    </View>
  );
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