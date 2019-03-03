import { StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window')
styles = StyleSheet.create({})
export default {
    card: {
        flex: 1,
        height: HEIGHT - '50%',
       width: WIDTH - 5
    },
    header: {
        width: '100%',
        height: 80,
        paddingTop:20,
        alignSelf: 'center'
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
        marginTop:50,
        width: 80,
        height: 80,
        marginEnd:20
    },
    textContainer:{
        flexDirection:'column',
        width:'100%',
        marginTop:20
    },
    textAmount:{
        
        fontWeight:'bold',
        marginTop:20,
        fontSize:22
    },
    textDescripition:{
        marginLeft:10,
    fontSize:18,
    fontWeight:'bold',
    marginTop:3
    },
    itemName:{
        fontSize:20
    },
    button:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center'
    }
}