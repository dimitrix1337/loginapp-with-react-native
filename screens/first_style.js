import { StyleSheet } from 'react-native'
import { wp, hp } from './general_style'


export const first_style = StyleSheet.create({

    title:{
        fontSize:wp(3.4)+hp(3.4),
        color:'#6125E4',
        fontWeight:'bold',
        marginBottom:hp(5),
        marginTop:hp(10)
    },
    buttons:{
        borderRadius:5,
        backgroundColor:'#6125E4',
        width:wp(60),
        height:hp(7),
        alignItems:'center',
        justifyContent:'center',
        marginTop:hp(10),
        borderWidth:1
    },
    footer:{
        fontSize:hp(1.3)+wp(1.3),
        marginTop:(11),
        color:'gray'
    }

})