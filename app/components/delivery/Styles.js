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
        height: 70,
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
        width: 150,
        height: 150,
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
        width: '80%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10

        
    }
}