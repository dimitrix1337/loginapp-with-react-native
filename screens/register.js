import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { register_style } from './register_style'
import { wp,hp } from './general_style'
import validation from './validate'
import firebase from '../firebase'
import { Input } from '../input'
import my_btn from './my_button'


export default class register_screen extends Component {

    constructor(props){
        super(props);

        this.state = { 
            email: '',
            pw:''
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
    
    onStepTwo = (props) => props.navigation.navigate('Finalizar registro')

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
            a: this.state.email
        }
    }

    
    onValidate = (text) => {

        if (text.length>1) {

            alert("Te has registrado con exito!")

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

                <this.onButton title={'SEGUIR'} function_passed={(text) => this.setState({a:text})}/>

            </View>

        )
    }

}