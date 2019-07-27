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
        alignItems:'center'
    },
    image: {
        borderRadius:10,
        width:60,
        height:60
    },
    text1: {
        fontSize:22,
        color:'white',
        paddingTop:15,
        fontWeight:'bold'
    }

})

export default styles