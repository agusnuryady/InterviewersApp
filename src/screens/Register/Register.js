import React, { Component } from 'react'
import {StatusBar,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Content} from  'native-base'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { connect } from 'react-redux'
import * as actionRegister from '../../redux/actions/register'

class Register extends Component {

    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            phone:'',
            password:'',
            passwordInvisible: true,
        }
    }

    handlingForm = async () => {
        if (this.state.name === '') {
            alert('Please enter your name !')
        } else if (this.state.email === '') {
            alert('Please enter your email !')
        } else if (this.state.phone === '') {
            alert('Please enter your phone number !')
        } else if (this.state.password === '') {
            alert('Please enter your password !')
        } else {
            try {
                const { name, email, phone, password } = this.state
                await this.props.register({name: name, email:email, phone_number: phone, password: password})
                await this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                    NavigationActions.navigate({ routeName: 'Menu' })
                    ],
                }))
            } catch (error) {
                alert('Check your network connection !')
            }
        }
    }

    render() {
        return (
            <LinearGradient
            start={{x: 1.5, y: 0.3}}
            end={{x: 0.5, y: 1.4}}
            colors={[
                "#9325bb", "#8a2bbf", "#8031c3", "#7636c7", "#6a3acb", "#5b49d3", 
                "#4a55da", "#3560e0", "#1274e8", "#0086ed", "#0f97ee", "#37a7ee"
            ]}
            style={styles.container} 
            >
                <Content>
                    <View style={styles.content}>
                        <View style={styles.contentItem} >
                            <View style={styles.headerBox}>
                                <Text style={styles.headerText} >REGISTER</Text>
                            </View>
                            <TextInput 
                                placeholder='Nama Lengkap'
                                placeholderTextColor='white'
                                value={this.state.name}
                                onChangeText={(name) => this.setState({name: name})}
                                style={styles.inputText} />
                            <TextInput 
                                placeholder='Email'
                                placeholderTextColor='white'
                                value={this.state.email}
                                onChangeText={(email) => this.setState({email: email})}
                                style={styles.inputText} />
                            <TextInput 
                                placeholder='Phone'
                                placeholderTextColor='white'
                                value={this.state.phone}
                                onChangeText={(phone) => this.setState({phone: phone})}
                                style={styles.inputText}
                                keyboardType={'numeric'} />
                            <View style={styles.inputBox2} >
                                <TextInput
                                    style={styles.inputText2}
                                    secureTextEntry= {this.state.passwordInvisible}
                                    placeholder='Password'
                                    placeholderTextColor= 'white'
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({password: password})} />
                                <TouchableOpacity
                                    style={styles.iconBox}
                                    onPress={() => this.setState({passwordInvisible: !this.state.passwordInvisible})}
                                >
                                    <Icon
                                        name={this.state.passwordInvisible === true ? 'eye-with-line': 'eye'}
                                        type='Entypo' style={styles.iconItem} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity 
                                onPress={()=> this.handlingForm()}
                                style={styles.buttonBox} >
                                <Text style={styles.buttonText} >SIGN UP</Text>
                            </TouchableOpacity>
                            <View style={styles.contentItem3} >
                                <Text style={styles.text2} >
                                    Already have account!
                                </Text>
                                <TouchableOpacity
                                    onPress={ () => this.props.navigation.navigate('Login') }
                                    style={styles.inputBox3} >
                                    <Text style={styles.text3} >
                                        Sign In
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </LinearGradient>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: data => dispatch(actionRegister.register(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)