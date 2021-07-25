import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { login_style } from './login_style'
import { wp,hp } from './general_style'
import { Input } from '../input'
import firebase from 'firebase'
import Firebase from '../firebase'
import Loader from './loading_screen'

export default class register_screen extends Component {

    constructor(props){
        super(props);

        this.state = { 
            email: '',
            pw:'',
            color_de: 'white',
            color_text: 'blue',
            loading: false
        }
    }

    onLogin = async () => {

        if (this.state.email.length>1 && this.state.pw.length>1) {

            this.setState({loading:true})
            
            try {
                await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pw)
                .then(() => {

                    this.setState({loading:false})
                    this.props.navigation.navigate('Página principal')

                })
            }
            catch (error) {

                alert(error)
                this.setState({loading:false})

            }
        }
        else {
            alert("Por favor, completa los campos.")
        }

    }


    render(){

        if (this.state.loading) {

            return ( <Loader/> )

        }

        return(

            <View style={login_style.background}>


                <Text style={login_style.title}>Bienvenido</Text>
                <Text style={{color:'black', fontWeight:'600', marginBottom:hp(2)}}>A ciudades unidas con vos.</Text>
                <Input secure={false} text={this.state.email} function_passed={(text) => this.setState({email:text})} placeholder_title={'Correo electrónico'} color_back={this.state.color_de} />
                <Input secure={true} text={this.state.pw} function_passed={(text) => this.setState({pw:text})} placeholder_title={'Contraseña'} color_back={this.state.color_de} />
                <Text style={{color:'blue', marginTop:hp(3), fontWeight:'600'}} onPress={() => this.props.navigation.navigate('Recuperar contraseña')}>Olvidé mi contraseña</Text>
                <Text style={{color:'gray', marginTop:hp(3), fontWeight:'500'}} onPress={() => this.props.navigation.navigate('Registro')}>Crear cuenta nueva</Text>

                <TouchableHighlight style={login_style.buttons} onPress={() => this.onLogin()}>
                    
                    <Text style={{fontWeight:'bold',fontSize:wp(1.5)+hp(1.5), color:'white'}}>INICIARME</Text>

                </TouchableHighlight>

                <Text style={{color:'gray', fontWeight:'600', marginTop:hp(15)}}>CIUDADES UNIDAS</Text>

            </View>

        )

    }

}