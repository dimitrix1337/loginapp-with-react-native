import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { login_style } from './login_style'
import { wp,hp } from './general_style'

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

                <TextInput 
                placeholder='Correo electrónico'
                placeholderTextColor='#3A3A3A'
                style={login_style.inputs}
                onChangeText={(email_wrote) => this.setState({email:email_wrote})}
                />

                <TextInput 
                placeholder='Contraseña'
                placeholderTextColor='#3A3A3A'
                style={login_style.inputs}
                onChangeText={(pw_wrote) => this.setState({pw:pw_wrote})}
                />

                <TouchableHighlight style={login_style.buttons}>
                    
                    <Text style={{fontWeight:'bold',fontSize:wp(1.5)+hp(1.5), color:'white'}}>INICIARME</Text>

                </TouchableHighlight>

            </View>

        )

    }

}