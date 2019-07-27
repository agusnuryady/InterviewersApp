import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

var {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
    },
    header: {
        alignItems:'center',
        elevation:5
    },
    headerText: {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    headerBtnRight: {
        position:'absolute',
        right:0
    },
    headerIconBtn1: {
        color:'white',
        margin:10
    },
    headerBtnLeft: {
        position:'absolute',
        left:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerIconBtn2: {
        color:'white',
        margin:5
    },
    headerBtnText: {
        color:'white', 
        fontSize:18
    },
    contentBox1: {
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        marginBottom:10,
        elevation:1,
    },
    contentBox2: {
        elevation:5,
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
        marginBottom:5,
        borderBottomColor:'blue',
        borderBottomWidth:1,
        elevation:1,
    },
    contentBox3: {
        backgroundColor:'rgba(255,255,255,0.7)',
        margin:15,
        borderRadius:10,
        alignItems:'center'
    },
    contentText1: {
        fontSize:15,
        textAlign:'center',
        marginBottom:10
    },
    contentText2: {
        margin:5,
        fontSize:18,
        fontWeight:'bold',
    },
    contentText3: {
        margin:5,
        textAlign:'center',
        fontSize:15
    },
    contentText4: {
        margin:5,
        fontSize:17,
        fontWeight:'bold'
    },
    contentText5: {
        fontSize:15,
        textAlign:'center',
        margin:5
    },
    contentThumbnail: {
        borderColor:'blue',
        borderWidth:2,
        margin:10
    },
    buttonBox: {
        flexDirection:'row',
        padding:10
    },
    buttonBlue: {
        padding:10,
        width:120,
        borderRadius:20,
        backgroundColor:'blue',
        alignItems:'center',
        flexDirection:'row'
    },
    buttonText: {
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    buttonGreen: {
        alignSelf:'stretch',
        padding:15,
        backgroundColor:'#0367FD',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:'gray',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    buttonText2: {
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginRight:5
    },
    contentBox4: {
        flexDirection:'row',
        borderRightWidth:0.5,
        borderColor:'gray',
        flex:5,
        alignItems:'center',
        justifyContent:'center'
    },
    contentBox5: {
        flexDirection:'row',
        borderLeftWidth:0.5,
        borderColor:'gray',
        flex:5,
        alignItems:'center',
        justifyContent:'center'
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
        padding:10,
    },
    textModal: {
        fontSize:25,
        color:'blue',
    },
    textModal2: {
        fontSize:22,
        color:'black',
        textAlign:'center',
        margin:10
    },
    textInputModal: {
        width:300,
        fontSize:18,
        margin:10,
        borderBottomWidth:0.5
    },
    menuListBox: {
        flexDirection:'row',
    },
    menuListText1: {
        marginBottom:5, 
        fontSize:20, 
        fontWeight:'bold'
    },
    codeButtonBox: {
        width:70,
        height:70,
        borderRadius:50,
        position:'absolute',
        bottom:15,
        right:15,
        backgroundColor:'#2A4CBC',
        alignItems:'center',
        justifyContent:'center'
    },

})

export default styles