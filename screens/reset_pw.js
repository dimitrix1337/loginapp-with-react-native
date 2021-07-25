import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Input } from '../input'
import { hp, wp } from './general_style'
import { login_style } from './login_style'

export default class reset_password extends Component {

     constructor(props){
          super(props)

          this.state = ({

               email:''

          })
     }

     onSendEmail = () => {

          alert("Sending email...")
     }



     render(){

          return(

               <View style={{alignItems:'center', justifyContent:'center', marginTop:hp(20)}}>

                    <Text style={{color:'#6125E4', fontSize:wp(1.5)+hp(1.5), marginBottom:hp(1), fontWeight:'bold'}}> Ingresa el email a recuperar la contraseña </Text>
                    <Input secure={false} function_passed={(text) => this.setState({email:text})} placeholder_title={'Correo electrónico'} color_back={'white'} />
                    <Text style={{color:'black', fontSize:wp(1.3)+hp(1.3), marginTop:hp(5), fontWeight:'600'}}>  Recuerda revisar la carpeta SPAM. </Text>
                    <TouchableHighlight style={login_style.buttons} onPress={() => this.onSendEmail()}>
                    
                         <Text style={{fontWeight:'bold',fontSize:wp(1.5)+hp(1.5), color:'white'}}>Enviar email</Text>

                    </TouchableHighlight>

                    <Text style={{color:'gray', fontWeight:'600', marginTop:hp(20)}}>CIUDADES UNIDAS</Text>
               </View>

          )

     }

}