import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { register_style } from './register_style'
import { wp,hp } from './general_style'
import { Input } from '../input'
import firebase from 'firebase'

export default class register_screen extends Component {

    constructor(props){
        super(props);

        this.state = { 
            email: '',
            pw:'',
            color_de:'white'
        }
    }
    
    onRegister = async (props) => {

        try {
                if (this.state.pw.length>=6) {
                    await firebase.auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.pw)
                    .then(() => {
                        alert("Registrado con exito!")
                        props.navigation.navigate('Finalizar registro')
                    })
                }
                else {
                    alert("La contraseña debe contener mínimo 6 caracteres.")
                }
            }
            catch (error) {

                    if (error.code === 'auth/email-already-in-use') {

                        alert("Este email ya está registrado!")

                    }
                    if (error.code === 'auth/invalid-email') {

                        alert("Email inexistente o inválido, reescribelo.")

                    }
                    if (error.code === 'auth/invalid-password'){

                        alert("Contraseña incorrecta.")

                    }
                    console.log(error)
                }

            }

    onButton = (props) => {

        const { title } = props
        const { function_passed } = props

        return(
               
            <TouchableHighlight style={register_style.buttons} onPress={() => function_passed()} underlayColor='black'>

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

                <Input secure={false} text={this.state.email} function_passed={(text) => this.setState({email:text})} placeholder_title={'Correo electrónico'} color_back={this.state.color_de}/>
                <Input secure={true} text={this.state.pw} function_passed={(text) => this.setState({pw:text})} placeholder_title={'Contraseña'} color_back={this.state.color_de}/>

                <this.onButton title={'CONTINUAR'} function_passed={() => this.onStepTwo(this.props)}/>

                <Text style={{color:'gray', fontWeight:'600', marginTop:hp(15)}}>CIUDADES UNIDAS</Text>

            </View>

        )

    }

}

export class register_two extends register_screen {


    constructor(props){
        super(props);
        this.state = {
            name: '',
            color_de: 'white',
        }
    }

    
    onValidate = () => {

        let name = this.state.name.length

        if (name>1) {
            alert("Solo un paso mas, inicia sesion ahora!")
            this.props.navigation.navigate('Iniciar sesion')
        }
        else {
            alert("Escribe un nombre real por favor.")
        }

    }

    render(){
        return(

            <View style={register_style.background}>
                
                <Text style={register_style.title}> ¿Como te llamas? </Text>

                <Input function_passed={(text) => this.setState({name:text})} placeholder_title={'Nombre completo'} color_back={this.state.color_de}/>

                <this.onButton title={'SEGUIR'} function_passed={() => this.onValidate()} />

                <Text style={{color:'gray', fontWeight:'600', marginTop:hp(15)}}>CIUDADES UNIDAS</Text>


            </View>

        )
    }

}