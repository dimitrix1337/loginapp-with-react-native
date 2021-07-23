import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { wp, hp } from './general_style'
import { first_style } from './first_style'

export default class acerca_de extends Component {

     NText = (props) => {

          const { text } = props

          return (

               <Text style={more_info_style.text}>{text}</Text>

          )

     }

     onButton = (props) => {

          const { title } = props
          const { function_passed } = props
  
          return(
                 
              <TouchableHighlight style={first_style.buttons} onPress={() => function_passed()}>
  
                   <Text style={{fontWeight:'bold', fontSize:wp(1.5)+hp(1.5), color:'white'}}> {title} </Text>
  
              </TouchableHighlight>
  
         )
  
      }

     render(){

          return(

               <View style={more_info_style.background}>

                    <Text style={more_info_style.title}> Contact us... </Text>
                    <View style={{padding:20}}>
                         <this.NText text={'Hi, my name is Octavio Pavon and this is a test. Everything can u see here is created by me. Im an enthusiast programmer, and my favourite dream is explore the entrepeuner world. Be my own boss.'}/>
                         

                    </View>

                    <this.onButton title={'SUPPORT ME'} function_passed={() => alert("Please contact me: octaviopavon7@gmail.com")}/>

               </View>

          )

     }

}

const more_info_style = StyleSheet.create({

     background:{
          backgroundColor:'white',
          flex:1,
          width: wp(100),
          height: hp(100),
          padding:0,
          justifyContent:'top',
          alignItems:'center'
     },
     text:{
          color:'black',
          fontSize:wp(1.4)+hp(1.4),
          
     },
     title:{
          fontSize:wp(2)+hp(2),
          color:'#6125E4',
          fontWeight:'bold',
          marginTop:hp(10)
     }

})