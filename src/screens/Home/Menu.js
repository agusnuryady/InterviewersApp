import React, { Component } from 'react'
import {StatusBar,ActivityIndicator,View,Text,FlatList,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Header,Content,Container,Thumbnail} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Modal from 'react-native-modal'
import styles from './styles'
import { connect } from 'react-redux'
import * as actionGroups from '../../redux/actions/group'
import * as actionUser from '../../redux/actions/user'

var { width, height } = Dimensions.get('window')

class Menu extends Component {

    constructor(props){
        super(props)
        this.state={
            isModalVisible:false,
            refreshGroups:false,
            code:''
        }
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            await this.props.getGroups(token)
            await this.props.getUser(token)
        }
    }

    fetchGroups = async ()=> {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            await this.props.getGroups(token)
            await this.setState({refreshGroups:false})
        }
    }

    async onRefreshGroups() {
        this.setState({refreshGroups:true}, function() {this.fetchGroups()})
    }

    handleLogout() {
        Alert.alert(
            '',
            'Are you sure you want to logout? ',
            [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'Yes',
                onPress: async () => {
                    await AsyncStorage.removeItem('token')
                    this.props.navigation.dispatch(
                        StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Login' })]
                        })
                    )
                }
            }
            ],
            { cancelable: false }
        )
    }

    modalShow() {
        this.setState({isModalVisible: !this.state.isModalVisible})
    }

    async handleGroup(id) {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            await this.props.getGroup({id: id, token: token})
            await this.props.navigation.navigate('Home')
        }
    }

    async handleCode() {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            try {
                await this.props.getCodeGroup({code: this.state.code, token: token})
                if (this.props.group.data[0].id !== '') {
                    await this.props.navigation.navigate('Home')
                }
            } catch (error) {
                alert('You are input a wrong code !')
            }
        }
        this.setState({isModalVisible: !this.state.isModalVisible, code:''})
    }

    render() {
        if (this.props.groups.isLoading) {
            return(
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={this.props.groups.isLoading}
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
                        <Text style={styles.headerText} >
                            AVAILABLE INTERVIEWS
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.handleLogout()}
                            style={styles.headerBtnRight}
                        >
                            <Icon name="logout" type="AntDesign" style={styles.headerIconBtn1} />
                        </TouchableOpacity>
                    </Header>
                    <Content>
                        <View>
                            <FlatList
                                onRefresh={() => this.onRefreshGroups()}
                                refreshing={this.state.refreshGroups}
                                data={this.props.groups.data}
                                renderItem={({item}) => (
                                    <TouchableOpacity
                                        onPress={() => this.handleGroup(item.id)}
                                        style={{borderBottomWidth:0.5,borderBottomColor:'gray'}}
                                    >
                                        <View style={styles.menuListBox} >
                                            <Thumbnail
                                                source={{uri:item.profile}}
                                                style={{margin:15}}
                                            />
                                            <View style={{margin:15}} >
                                                <Text style={styles.menuListText1}>
                                                    {item.position}
                                                </Text>
                                                <Text style={{fontSize:17}}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => {
                                    return item.id.toString()
                                }}
                            />
                        </View>
                    </Content>
                    <TouchableOpacity
                        onPress={() => this.modalShow()}
                        style={styles.codeButtonBox}>
                        <Icon name='qrcode' type='MaterialCommunityIcons' style={{color:'white'}}/>
                    </TouchableOpacity>
                    <Modal
                    animationIn='slideInUp'
                    animationOut='slideOutDown'
                    onBackdropPress={()=>this.setState({isModalVisible: !this.state.isModalVisible, code:''})}
                    isVisible={this.state.isModalVisible}
                    style={styles.modalContainer}
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.textModal2} >
                                Interview Code
                            </Text>
                            <TextInput 
                                placeholder='Enter Code Here...'
                                value={this.state.code}
                                autoCapitalize='none'
                                onChangeText={(code) => this.setState({code: code})}
                                style={styles.textInputModal}
                            />
                            <TouchableOpacity 
                                onPress={()=> this.handleCode()}
                                style={styles.buttonModal}>
                                <Text style={styles.textModal}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        groups: state.groups,
        group: state.group,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGroups: token => dispatch(actionGroups.getGroups(token)),
        getGroup: data => dispatch(actionGroups.getGroup(data)),
        getCodeGroup: data => dispatch(actionGroups.getCodeGroup(data)),
        getUser: token => dispatch(actionUser.getUser(token)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)
