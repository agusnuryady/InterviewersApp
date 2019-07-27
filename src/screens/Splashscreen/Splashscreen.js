import React, { Component } from 'react'
import { View, Text, TextInput, Alert, TouchableOpacity, Dimensions, Image } from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

export default class Splashscreen extends Component {

    static navigationOptions = {
        title: "Splashscreen"
    }
    
    componentDidMount() {
        this.GoToApp()
    }

    GoToApp = () => {
        setTimeout(async () => {
            let token = await AsyncStorage.getItem('token')
            if (!token) {
            this.props.navigation.dispatch(
                StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })]
                })
            )
            } else {
            this.props.navigation.dispatch(
                StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Menu' })]
                })
            )
            }
        }, 2000)
    }

    render() {
        return (
            <LinearGradient
            start={{ x: 1.5, y: 0.3 }}
            end={{ x: 0.5, y: 1.4 }}
            colors={[
                "#9325bb", "#8a2bbf", "#8031c3", "#7636c7", "#6a3acb", "#5b49d3", 
                "#4a55da", "#3560e0", "#1274e8", "#0086ed", "#0f97ee", "#37a7ee"
            ]}
            style={styles.container}
            >
                <View style={styles.content}>
                    <View style={styles.contentItem}>
                        <Image 
                            source={require('../../component/interviewersicon.png')}
                            style={styles.image}
                        />
                        <Text style={styles.text1} >INTERVIEWERS</Text>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}