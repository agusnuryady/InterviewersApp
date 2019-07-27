import React, { Component } from 'react'
import {StatusBar,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Content} from  'native-base'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { connect } from 'react-redux'
import * as actionLogin from '../../redux/actions/login'

class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            passwordInvisible: true,
        }
    }

    handlingForm = async () => {
        if (this.state.email === '') {
            alert('Please enter your email !')
        } else if (this.state.password === '') {
            alert('Please enter your password !')
        } else {
            try {
                await this.props.login({email:this.state.email, password: this.state.password})
                await this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                    NavigationActions.navigate({ routeName: 'Menu' })
                    ],
                }))
            } catch (error) {
                if (error.response.status === 401) {
                    alert('Wrong Username Or Password !')
                } else {
                    alert('Check your network connection !')
                }
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
                                <Text style={styles.headerText} >LOGIN</Text>
                            </View>
                            <TextInput 
                                placeholder='Email'
                                placeholderTextColor='white'
                                value={this.state.email}
                                onChangeText={(email) => this.setState({email: email})}
                                style={styles.inputText} />
                            <View style={styles.inputBox2} >
                                <TextInput
                                    style={styles.inputText2}
                                    secureTextEntry= {this.state.passwordInvisible}
                                    placeholder='Password'
                                    placeholderTextColor= 'white'
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({password: text})} />
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
                                <Text style={styles.buttonText} >SIGN IN</Text>
                            </TouchableOpacity>
                            <View style={styles.contentItem3} >
                                <Text style={styles.text2} >
                                    Not registered?
                                </Text>
                                <TouchableOpacity
                                    onPress={ () => this.props.navigation.navigate('Register') }
                                    style={styles.inputBox3} >
                                    <Text style={styles.text3} >
                                        Create an account
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
        login: user => dispatch(actionLogin.login(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)