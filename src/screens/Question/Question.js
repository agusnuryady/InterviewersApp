import React, { Component } from 'react'
import {ActivityIndicator,StatusBar,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image,FlatList} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Header,Content,Container,Thumbnail} from  'native-base'
import RadioForm, {RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button'
import MultipleSelect from 'react-native-multiple-select'
import { RNCamera } from 'react-native-camera'
import styles from './styles'
import axios from 'axios'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import AsyncStorage from '@react-native-community/async-storage'
import RNFetchBlob from 'rn-fetch-blob'
import {URL} from '../../component/Global'

let arrnew = []
let interval

class Question extends Component {

    constructor(props){
        super(props)
        this.qno = 0
        const data = this.props.question.data
        arrnew = Object.keys(data).map( function(k) {return data[k]} )
        this.state={
            questId: arrnew[this.qno].id,
            quest: arrnew[this.qno].description,
            option: arrnew[this.qno].choices,
            number: arrnew[this.qno].number,
            type: arrnew[this.qno].type,
            timer: arrnew[this.qno].timer,
            countCheck:0,
            answer:'',
            token:'',
            user:[],
            selectedItems:[],
            isModalVisible:false,
            recording: false,
            processing: false
        }
    }

    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        this.setState({token: token})
        this.setState({user: this.props.user.data[0]})
        interval=setInterval(() => {this.setState(prev => ({timer:prev.timer-1}) )},1000)
    }

    componentDidUpdate(prevProps,PrevState){
        if(PrevState.timer === 1){
            this.next()
        }
    }

    componentWillUnmount() {
        clearInterval(interval)
    }

    async next() {
        if (this.qno < arrnew.length-1) {
            if (this.state.answer === '') {
                sendData = async ()=> {
                    let data = JSON.stringify({
                        question_id: this.state.questId,
                        user_id: this.state.user.id,
                        answer: '0',
                        attachment:'0',
                    })
                    const res = await axios.post(`${URL}post/answer`, data, {
                        headers: {
                            "Authorization": `bearer ${this.state.token}`,
                            "Content-Type": "application/json",
                        },
                    })
                }
                sendData()
                this.qno++
    
                this.setState({ 
                    countCheck: 0, quest: arrnew[this.qno].description, 
                    questId: arrnew[this.qno].id,
                    option: arrnew[this.qno].choices, 
                    number: arrnew[this.qno].number,
                    type: arrnew[this.qno].type,
                    timer: arrnew[this.qno].timer,
                    answer: ''
                })
            } else {
                sendData = async ()=> {
                    let data = JSON.stringify({
                        question_id: this.state.questId,
                        user_id: this.state.user.id,
                        answer: this.state.answer,
                        attachment:'0',
                    })
                    const res = await axios.post(`${URL}post/answer`, data, {
                        headers: {
                            "Authorization": `bearer ${this.state.token}`,
                            "Content-Type": "application/json",
                        },
                    })
                }
                sendData()
                this.qno++
    
                this.setState({ 
                    countCheck: 0, quest: arrnew[this.qno].description, 
                    questId: arrnew[this.qno].id,
                    option: arrnew[this.qno].choices, 
                    number: arrnew[this.qno].number,
                    type: arrnew[this.qno].type,
                    timer: arrnew[this.qno].timer,
                    answer: ''
                })
            }
        }else{
            if (this.state.answer === '') {
                sendData = async ()=> {
                    let data = JSON.stringify({
                        question_id: this.state.questId,
                        user_id: this.state.user.id,
                        answer: '0',
                        attachment:'0',
                    })
                    const res = await axios.post(`${URL}post/answer`, data, {
                        headers: {
                            "Authorization": `bearer ${this.state.token}`,
                            "Content-Type": "application/json",
                        },
                    })
                }
                sendData()
            } else {
                sendData = async ()=> {
                    let data = JSON.stringify({
                        question_id: this.state.questId,
                        user_id: this.state.user.id,
                        answer: this.state.answer,
                        attachment:'0',
                    })
                    const res = await axios.post(`${URL}post/answer`, data, {
                        headers: {
                            "Authorization": `bearer ${this.state.token}`,
                            "Content-Type": "application/json",
                        },
                    })
                }
                sendData()
            }
            //this.props.quizFinish(this.score*100/5)
            this.modalShow()
            clearInterval(interval)
        }
    }

    prev() {
        Alert.alert(
            '',
            'Are you sure you want to quit? ',
            [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'Yes',
                onPress: () => {
                    clearInterval(interval)
                    this.props.navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                        NavigationActions.navigate({ routeName: 'Menu' })
                        ],
                    }))
                }
            }
            ],
            { cancelable: false }
        );
    }

    getTextInput(type) {
        return type === 'text' ? true : false
    }

    getMultipleChoice(type) {
        return type === 'multiple choice' ? true : false
    }

    getMultiSelect(type) {
        return type === 'multi select' ? true : false
    }

    getVideoRecord(type) {
        return type === 'video record' ? true : false
    }

    handleChangeRadio = label => this.setState({answer: label})

    dataMultiSelect(option) {
        dataku = []
        option.map((obj)=> {
            dataku = [...dataku,{id:`${obj.choice}`, name:obj.choice}]
        })
        return dataku
    }

    onSelectionsChange = (answer) => {
        this.setState({answer})
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({selectedItems,answer:selectedItems.toString()})
    }

    modalShow(){
        this.setState({isModalVisible: !this.state.isModalVisible})
    }

    modalPress() {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
            NavigationActions.navigate({ routeName: 'Menu' })
            ],
        }))
    }
    
    render() {
        const { recording, processing } = this.state

        let button = (
            <TouchableOpacity
            onPress={this.startRecording.bind(this)}
            style={styles.capture}
            >
                <Text style={{ fontSize: 14 }}> RECORD </Text>
            </TouchableOpacity>
        );
    
        if (recording) {
            button = (
            <TouchableOpacity
                onPress={this.stopRecording.bind(this)}
                style={styles.capture}
            >
                <Text style={{ fontSize: 14 }}> STOP </Text>
            </TouchableOpacity>
            );
        }
    
        if (processing) {
            button = (
            <View style={styles.capture}>
                <ActivityIndicator animating size={18} />
            </View>
            );
        }
        
        return (
            <Container style={styles.container} >
                <Header style={styles.header} >
                    <Text style={styles.headerText} >
                        Question #{this.state.number}
                    </Text>
                </Header>
                <Content>
                    <View style={styles.contentBox1} >
                        <Text style={styles.contentText2} >
                            Time Remaining : {this.state.timer} Second
                        </Text>
                    </View>
                    <View style={styles.contentBox2} >
                        <TouchableOpacity
                            onPress={ ()=> this.prev() }
                            style={styles.buttonGreen}>
                            <Icon
                                name='logout' type='SimpleLineIcons' style={{color:'black'}}
                            />
                            <Text style={styles.buttonText1} >
                                Quit
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={ ()=> this.next() }
                            style={styles.buttonBlue}>
                            <Text style={styles.buttonText2} >
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentBox3} >
                        <Text style={styles.contentText2} >
                            {this.state.quest}
                        </Text>
                    </View>
                    <View style={styles.contentBox4} >
                        {this.getTextInput(this.state.type)?
                            (<TextInput
                                placeholder='tulis jawabanmu....'
                                value={this.state.answer}
                                onChangeText={(val) => this.setState({answer: val})}
                                style={styles.inputText}
                            />) : null 
                        }
                        {this.getMultipleChoice(this.state.type)?
                            (<MultipleChoice
                                data = {this.state.option}
                                radioAction = {(value) => {this.setState({answer: value})}}
                            />) : null 
                        }
                        {this.getMultiSelect(this.state.type)?
                            (
                                <MultipleSelect
                                    hideTags
                                    items={this.dataMultiSelect(this.state.option)}
                                    uniqueKey="id"
                                    onSelectedItemsChange={this.onSelectedItemsChange}
                                    selectedItems={this.state.selectedItems}
                                    selectText="Pick Items"
                                    onChangeInput={ (text)=> console.log(text)}
                                    altFontFamily="ProximaNova-Light"
                                    tagRemoveIconColor="#CCC"
                                    tagBorderColor="#CCC"
                                    tagTextColor="#CCC"
                                    selectedItemTextColor="#CCC"
                                    selectedItemIconColor="#CCC"
                                    itemTextColor="#000"
                                    displayKey="name"
                                />
                            ) : null
                        }
                        {this.getVideoRecord(this.state.type)?
                            (
                                <View style={{padding:10,justifyContent:'center',alignItems:'center'}} >
                                    <RNCamera
                                        ref={ref => {
                                            this.camera = ref;
                                        }}
                                        style={styles.preview}
                                        type={RNCamera.Constants.Type.front}
                                        flashMode={RNCamera.Constants.FlashMode.on}
                                        androidCameraPermissionOptions={{
                                            title: 'Permission to use camera',
                                            message: 'We need your permission to use your camera',
                                            buttonPositive: 'Ok',
                                            buttonNegative: 'Cancel',
                                        }}
                                        androidRecordAudioPermissionOptions={{
                                            title: 'Permission to use audio recording',
                                            message: 'We need your permission to use your audio',
                                            buttonPositive: 'Ok',
                                            buttonNegative: 'Cancel',
                                        }}
                                    />
                                    <View
                                    style={styles.buttonCamera}
                                    >
                                        {button}
                                    </View>
                                </View>
                            ) : null 
                        }
                    </View>
                </Content>
                <Modal
                animationIn='slideInUp'
                animationOut='slideOutDown'
                onBackdropPress={()=>this.modalPress()}
                isVisible={this.state.isModalVisible}
                style={styles.modalContainer} 
                >
                    <View style={styles.modalContent}>
                        <Thumbnail
                            large
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz9wLxd2KGniSuiWMFyVDrj25nYnqa-8zewVIAwlYxmrzXc8_"}}
                            style={{margin:10}}
                        />
                        <Text style={styles.textModal2} >
                            Selamat kamu telah menyelesaikan sesi ini
                        </Text>
                        <Text style={styles.textModal2} >
                            Kami akan segera menghubungi anda kembali
                        </Text>
                        <TouchableOpacity 
                            onPress={()=>this.modalPress()}
                            style={styles.buttonModal}>
                            <Text style={styles.textModal}>
                                Done
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Container>
        )
    }

    async startRecording() {
        this.setState({ recording: true });
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await this.camera.recordAsync();
        this.setState({ recording: false, processing: true });
        const type = `video/${codec}`;
        
        const data = new FormData();
        data.append("video", {
        name: "mobile-video-upload",
        type,
        uri
        });
        
        try {
            sendData = async ()=> {
                const res = await  RNFetchBlob.fetch('POST', `${URL}post/answer`, {
                    Authorization: `bearer ${this.state.token}`
                }, [
                    { name: 'question_id', data: `${this.state.questId}` },
                    { name: 'user_id', data: `${this.state.user.id}` },
                    { name: 'answer', data: '0' },
                    { name: 'attachment', data: RNFetchBlob.wrap(uri) }
                ])
            }
            sendData()
        } catch (e) {
        console.error(e);
        }
        
        this.setState({ processing: false });
    }
    
    stopRecording() {
        this.camera.stopRecording();
        if (this.qno < arrnew.length-1) {
            this.qno++

            this.setState({ 
                countCheck: 0, quest: arrnew[this.qno].description, 
                questId: arrnew[this.qno].id,
                option: arrnew[this.qno].choices, 
                number: arrnew[this.qno].number,
                type: arrnew[this.qno].type,
                timer: arrnew[this.qno].timer,
                answer: ''
            })
        }else{
            this.modalShow()
            clearInterval(interval)
        }
    }
}

class MultipleChoice extends Component {
    render() {
        radio_props = []
        option = this.props.data
        option.map((obj)=> {
            radio_props = [...radio_props,{label:obj.choice, value:obj.choice}]
        })
        return(
            <RadioForm
                radio_props={radio_props}
                initial={-1}
                onPress={(value)=>this.props.radioAction(value)}
            />
        )
    }
}

const mapStateProps = (state) => (
    {
        question: state.question,
        user: state.user
    }
)

export default connect(mapStateProps)(Question)