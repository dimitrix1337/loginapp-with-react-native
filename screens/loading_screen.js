import React,{ Component } from "react";
import { hp } from "./general_style";
import { View , Text, ActivityIndicator } from 'react-native'

export default class Loader extends Component {

     render (){

          return(

               <View style={{alignItems:'center', justifyContent:'center', height:hp(100)}}>

                    <Text style={{marginBottom:5, color:'gray', marginTop:-(hp(20))}}> Cargando </Text>
                    <ActivityIndicator size='large' color='#6125E4'/>

               </View>

          )
     }

}