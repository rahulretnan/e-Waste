import { StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window')
styles = StyleSheet.create({})
export default {
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 80,
        paddingTop:20,
        alignSelf: 'center'
    },
    card:{
        alignSelf:'center'
        ,flexDirection:'row'
        ,marginTop:4,
        flex:1,
        borderRadius:5,
        backgroundColor:'rgba(0,0,0,0.1)',
        height: HEIGHT - '50%',
        width: WIDTH - 5
    },
    heart:{
        fontSize:20,
        color:'grey',
    },
    heartContainer:{
        marginBottom:30,
        marginEnd:5

    },
    image:{
        width:140,
        height:150
    },
    textContainer:{
        flexDirection:'column',
        width:'100%',
        justifyContents:'center',
        marginTop:20
    },
    textAmount:{
        alignSelf:'center',
        fontWeight:'bold',
        marginTop:8,
        fontSize:18
    },
    textDescripition:{

    fontSize:10,
    fontWeight:'bold',
    marginTop:3
    },
    itemName:{
        fontWeight:'bold'
    }
}