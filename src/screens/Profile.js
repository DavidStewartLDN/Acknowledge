import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'

import { connect } from 'react-redux'
import Firebase from '../../config/Firebase'

import Header from '../components/Header'

class Profile extends React.Component {

    moveStack = () => {
        this.props.navigation.navigate('View Achievements')
    }

    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <>
                <Header titleText='Access' />
                <IconButton
                icon='logout'
                size={25}
                color='white'
                onPress={this.handleSignout}
                style={styles.iconButton}
                />
                <View style={styles.container}>
                    <Text>Profile Screen</Text>
                    <Text>{this.props.user.email}</Text>
                    <TouchableOpacity style={styles.button} onPress={this.moveStack}>
                        <Text style={styles.buttonText}>Go to main app</Text>
                    </TouchableOpacity>

                </View>
            </>
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
    },
    iconButton: {
      backgroundColor: 'rgba(46, 113, 102, 0.8)',
      position: 'absolute',
      right: 0,
      top: 40,
      margin: 10
    },
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)
