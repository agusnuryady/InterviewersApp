import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

var {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F5ECFB'
    },
    container2: {
        flex:1,
        flexDirection: "column",
        backgroundColor: "black"
    },
    header: {
        elevation:5,
        alignItems:'center'
    },
    headerText: {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    contentBox1: {
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    contentBox2: {
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row'
    },
    contentBox3: {
        backgroundColor:'white',
        padding:20,
        elevation:2,
        alignItems:'center',
        borderBottomColor:'blue',
        borderBottomWidth:1,
    },
    contentBox4: {
        elevation:2,
        backgroundColor:'white',
        marginVertical:20,
        padding:20,
    },
    contentText1: {
        fontSize:15,
        textAlign:'center'
    },
    contentText2: {
        margin:5,
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold'
    },
    contentText3: {
        margin:5,
        textAlign:'center',
        fontSize:15
    },
    contentText4: {
        margin:5,
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold'
    },
    buttonBox: {
        flexDirection:'row',
        padding:10
    },
    buttonBlue: {
        flex:6,
        padding:10,
        backgroundColor:'#2A2DC1',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    buttonText1: {
        fontSize:20,
        color:'black',
        marginLeft:20
    },
    buttonGreen: {
        flex:4,
        padding:10,
        backgroundColor:'#E0E0E0',
        justifyContent:'center',
        flexDirection:'row',
    },
    buttonText2: {
        fontSize:20,
        color:'white',
    },
    inputText: {
        margin:10,
        fontSize:17,
        borderBottomWidth:1,
        width:'90%',
        borderBottomColor:'black'
    },
    preview: {
        width:'98%',
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCamera: {
        position:'absolute',
        bottom:0,
        flex: 0, 
        flexDirection: "row", 
        justifyContent: "center"
    },
    capture: {
        //flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    modalContainer: {
        height:height,
        margin:0,
        alignItems:'center',
        justifyContent:'center'
    },
    modalContent: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
    buttonModal: {
        padding:20,
    },
    textModal: {
        fontSize:25,
        color:'blue',
    },
    textModal2: {
        fontSize:15,
        color:'black',
        textAlign:'center',
        marginHorizontal:10
    },
})

export default styles