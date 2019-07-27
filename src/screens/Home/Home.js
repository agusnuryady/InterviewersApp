import React, { Component } from 'react'
import {StatusBar,ActivityIndicator,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Header,Content,Container,Thumbnail} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import { connect } from 'react-redux'
import * as actionQuestion from '../../redux/actions/question'

var { width, height } = Dimensions.get('window')

class Home extends Component {
    
    constructor(props){
        super(props)
        this.state={
            group:[],
        }
    }

    async componentDidMount() {
        this.setState({group: this.props.group.data[0]})
        const token = await AsyncStorage.getItem('token')       
        if (token) {
            await this.props.getQuestion({id: this.state.group.id, token: token})
        }
    }
    
    handlBack() {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Menu' })
            ],
        }))
    }

    render() {
        if (this.props.question.isLoading) {
            return(
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={this.props.question.isLoading}
                        color="#19FAC2"
                        size="large"
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: height
                        }}
                    />
                </View>
            )
        } else {
            return (
                <Container style={styles.container} >
                    <Header style={styles.header} >
                        <TouchableOpacity
                            onPress={() => this.handlBack()}
                            style={styles.headerBtnLeft}
                        >
                            <Icon name="left" type="AntDesign" style={styles.headerIconBtn2} />
                        </TouchableOpacity>
                        <Text style={styles.headerText} >
                            WELCOME INTERVIEWERS
                        </Text>
                    </Header>
                    <Content>
                        <View style={styles.contentBox1}>
                            <Text style={styles.contentText1} >
                                Ini adalah sesi interview online yang diselenggarakan oleh:
                            </Text>
                            <Thumbnail
                                large
                                source={{uri:this.state.group.profile}}
                                style={styles.contentThumbnail}
                            />
                            <Text style={styles.contentText2} >
                                {this.state.group.name}
                            </Text>
                            <Text style={styles.contentText5} >
                                untuk posisi:
                            </Text>
                            <Text style={styles.contentText2} >
                                {this.state.group.position}
                            </Text>
                        </View>
                        <View style={styles.contentBox2} >
                            <Text style={styles.contentText3} >
                                Disini kamu akan diberikan sebuah pertanyaan esay, multiple choice, dan multiple select
                                yang harus kamu isi dengan tenggat waktu yang telah ditentukan, selamat mengerjakan
                            </Text>
                        </View>
                        <View style={styles.contentBox3} >
                            <View style={{flexDirection:'row'}} >
                                <View style={styles.contentBox4} >
                                    <Icon name='profile' type='AntDesign' style={{margin:10}} />
                                    <Text style={styles.contentText2} >
                                        {this.props.question.data.length} Question
                                    </Text>
                                </View>
                                <View style={styles.contentBox5} >
                                    <Icon name='stopwatch' type='Entypo' style={{margin:10}} />
                                    <Text style={styles.contentText2} >
                                        {this.props.question.data.reduce( function(cnt,o){ return cnt + o.timer; }, 0)} Second
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={()=> 
                                    this.props.navigation.dispatch(StackActions.reset({
                                        index: 0,
                                        actions: [
                                        NavigationActions.navigate({ routeName: 'Question' })
                                        ],
                                    }))
                                }
                                style={styles.buttonGreen} >
                                <Text style={styles.buttonText2} >
                                    Mulai
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        question: state.question,
        group: state.group
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuestion: data => dispatch(actionQuestion.getQuestion(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
