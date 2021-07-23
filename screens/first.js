import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { first_style } from './first_style'
import { wp,hp } from './general_style'

export default class First_screen extends Component {

    constructor(props){
        super(props);
    }

    Login_screen = (props) => props.navigation.navigate('Iniciar sesion')
    Register_screen = (props) => props.navigation.navigate('Registro')

    render() {

        return (
            <View style={{alignItems:'center', padding:0, justifyContent:'center'}}>
                <Text style={first_style.title}> Campana Login</Text>

                <TouchableHighlight style={first_style.buttons} onPress={() => this.Register_screen(this.props)}>

                    <Text style={{fontWeight:'bold', fontSize:wp(1.5)+hp(1.5), color:'white'}}> REGISTRARSE </Text>

                </TouchableHighlight>

                
                <TouchableHighlight style={first_style.buttons} underlayColor='black' onPress={() => this.Login_screen(this.props)}>

                    <Text style={{fontWeight:'bold', fontSize:wp(1.5)+hp(1.5), color:'white'}}> INICIAR SESIÓN </Text>

                </TouchableHighlight>

                <Text style={first_style.footer}>Acerca de nosotros</Text>

            </View>
        )

    }

}