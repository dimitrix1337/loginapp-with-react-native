import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { register_style } from './register_style'
import { wp,hp } from './general_style'
import validation from './validate'
import firebase from '../firebase'


export default class register_screen extends Component {

    constructor(props){
        super(props);

        this.state = { 
            email: '',
            pw:''
        }
    }

    onCreateUser = async () => {

        await auth.createUserWithEmailAndPassword(this.email, this.pw)
        .then((UserCredential) => {

            var user = UserCredential.user
            alert("Registrado con exito!")

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error)
          });

    }

    render(){

        return(

            <View style={register_style.background}>

                <Text style={register_style.title}>COMPLETA TUS DATOS</Text>

                <TextInput 
                placeholder='Correo electrónico'
                placeholderTextColor='#3A3A3A'
                style={register_style.inputs}
                onChangeText={(email_wrote) => this.setState({email:email_wrote})}
                />

                <TextInput 
                placeholder='Contraseña'
                placeholderTextColor='#3A3A3A'
                style={register_style.inputs}
                onChangeText={(pw_wrote) => this.setState({pw:pw_wrote})}
                />

                <TouchableHighlight style={register_style.buttons} onPress={() => this.onCreateUser}>
                    
                    <Text style={{fontWeight:'bold',fontSize:wp(1.5)+hp(1.5), color:'white'}}>CONTINUAR</Text>

                </TouchableHighlight>

            </View>

        )

    }

}