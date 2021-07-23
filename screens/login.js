import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { login_style } from './login_style'
import { wp,hp } from './general_style'
import { Input } from '../input'

export default class register_screen extends Component {

    constructor(props){
        super(props);

        this.state = { 
            email: '',
            pw:''
        }
    }

    render(){

        return(

            <View style={login_style.background}>

                <View style={login_style.mini_div}></View>

                <Input text={this.state.email} function_passed={(text) => this.setState({email:text})} placeholder_title={'Correo electrónico'}/>
                <Input text={this.state.pw} function_passed={(text) => this.setState({pw:text})} placeholder_title={'Contraseña'}/>


                <TouchableHighlight style={login_style.buttons}>
                    
                    <Text style={{fontWeight:'bold',fontSize:wp(1.5)+hp(1.5), color:'white'}}>INICIARME</Text>

                </TouchableHighlight>

            </View>

        )

    }

}