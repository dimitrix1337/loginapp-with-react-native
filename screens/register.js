import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { register_style } from './register_style'
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
    
    onRegister = async (props) => {

        try {
                await firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.pw)
                .then(() => {
                    alert("Registrado con exito!")
                    props.navigation.navigate('Finalizar registro')
                })
            }
            catch (error) {

                    if (error.code === 'auth/email-already-in-use') {

                        alert("Este email ya está registrado!")

                    }
                    if (error.code === 'auth/invalidad-email') {

                        alert("Email inexistente o inválido, reescribelo.")

                    }
                    console.log(error)
                }

            }

    onButton = (props) => {

        const { title } = props
        const { function_passed } = props

        return(
               
            <TouchableHighlight style={register_style.buttons} onPress={() => function_passed()}>

                 <Text style={{fontWeight:'bold', fontSize:wp(1.5)+hp(1.5), color:'white'}}> {title} </Text>

            </TouchableHighlight>

       )

    }
    
    onStepTwo = (props) => { 
        
        let email = this.state.email.length
        let pw = this.state.pw.length

        if (email<1 && pw<1) {

            alert("Por favor, rellena los campos.")

        }
        else {

            this.onRegister(props)

        }


}

    render(){

        return(

            <View style={register_style.background}>

                <Text style={register_style.title}>COMPLETA TUS DATOS</Text>

                <Input text={this.state.email} function_passed={(text) => this.setState({email:text})} placeholder_title={'Correo electrónico'}/>
                <Input text={this.state.pw} function_passed={(text) => this.setState({pw:text})} placeholder_title={'Contraseña'}/>

                <this.onButton title={'CONTINUAR'} function_passed={() => this.onStepTwo(this.props)}/>

            </View>

        )

    }

}

export class register_two extends register_screen {


    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    
    onValidate = () => {

        let length_name = this.state.name.length
        if (length_name>1) {

            alert("Te has registrado con exito " + this.state.name + " !!!")

        }

        else {

            alert("Por favor, escribe un nombre real.")

        }

    }

    render(){
        return(

            <View style={register_style.background}>
                
                <Text style={register_style.title}> ¿Como te llamas? </Text>

                <Input function_passed={(text) => this.setState({name:text})} placeholder_title={'Nombre completo'}/>

                <this.onButton title={'SEGUIR'} function_passed={() => this.onValidate} />

            </View>

        )
    }

}