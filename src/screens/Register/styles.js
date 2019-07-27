import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

var {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:0
    },
    content: {
        height:height,
        alignItems:'center',
        justifyContent:'center'
    },
    contentItem: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderRadius:15,
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    headerBox: {
        alignItems:'center',
        flexDirection:'row',
        margin:10,
        marginBottom:10,
    },
    headerText: {
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'notoserif',
    },
    inputText: {
        margin:10,
        fontSize:20,
        color:'white',
        borderBottomWidth:1,width:270,
        borderBottomColor:'white'
    },
    buttonBox: {
        marginTop:20,
        margin:10,
        backgroundColor:'rgba(91,73,211,0.6)',
        padding:10,
        width:270,
        borderColor:'gray',
        borderWidth:0.3,
        alignItems:'center',
        borderRadius:10
    },
    buttonText: {
        fontSize:20,
        color:'white',
    },
    contentItem3: {
        flexDirection:'row',
        margin:10
    },
    text2: {
        color:'white',
        fontSize:15
    },
    inputBox3: {
        paddingHorizontal:7
    },
    text3: {
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    inputBox2: {
        flexDirection:'row',
        minWidth: 270,
        minHeight:55,
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'stretch',
        borderColor:'white',
        borderBottomWidth:1,
    },
    iconBox: {
        alignItems:'center',
        justifyContent:'center'
    },
    iconItem: {
        fontSize:20,
        color:'white'
    },
    inputText2: {
        fontSize: 20,
        color: 'white',
        width:250
    },
})

export default styles