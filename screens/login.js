import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { login_style } from './login_style'
import { wp,hp } from './general_style'
import { Input } from '../input'
import firebase from 'firebase'
import Firebase from '../firebase'

export default class register_screen extends Component {

    constructor(props){
        super(props);

        this.state = { 
            email: '',
            pw:''
        }
    }

    onLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pw)
            .then(() => {

                this.props.navigation.navigate('Página principal')

            })
        }
        catch (error) {

            alert(error)

        }

    }

    render(){

        return(

            <View style={login_style.background}>


                <Text style={login_style.title}>Bienvenido</Text>

                <Input text={this.state.email} function_passed={(text) => this.setState({email:text})} placeholder_title={'Correo electrónico'}/>
                <Input text={this.state.pw} function_passed={(text) => this.setState({pw:text})} placeholder_title={'Contraseña'}/>


                <TouchableHighlight style={login_style.buttons} onPress={() => this.onLogin()}>
                    
                    <Text style={{fontWeight:'bold',fontSize:wp(1.5)+hp(1.5), color:'white'}}>INICIARME</Text>

                </TouchableHighlight>

            </View>

        )

    }

}