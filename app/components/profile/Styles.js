import { StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
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
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    btnSearch: {
        top: 15,
        alignSelf: 'center',
        borderRadius: 45,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 45,
        paddingRight: 45,
        backgroundColor: 'rgba(115, 51, 21, 0.7)',
    }
}