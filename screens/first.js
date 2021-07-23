import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { first_style } from './first_style'
import { wp,hp } from './general_style'

export default class First_screen extends Component {

    constructor(props){
        super(props);
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

    Login_screen = (props) => props.navigation.navigate('Iniciar sesion')
    Register_screen = (props) => props.navigation.navigate('Registro')
    More_info_screen = (props) => props.navigation.navigate('Acerca de')

    render() {

        return (
            <View style={{alignItems:'center', padding:0, justifyContent:'center'}}>
                <Text style={first_style.title}> CAMPANA TIENDA</Text>

                <this.onButton title={'REGISTRARME'} function_passed={() => this.Register_screen(this.props)}/>
                <this.onButton title={'INICIAR SESIÓN'} function_passed={() => this.Login_screen(this.props)}/>

                <Text style={first_style.footer} onPress={() => this.More_info_screen(this.props)}>Acerca de nosotros</Text>

            </View>
        )

    }

}