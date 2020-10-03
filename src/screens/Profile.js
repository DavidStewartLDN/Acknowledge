import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Profile extends React.Component {

    moveStack = () => {
        this.props.navigation.navigate('ViewAchievements')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
                <TouchableOpacity style={styles.button} onPress={this.moveStack}>
                    <Text style={styles.buttonText}>Go to main app</Text>
                </TouchableOpacity>
            </View>
        )
    }
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
    }
})

export default Profile