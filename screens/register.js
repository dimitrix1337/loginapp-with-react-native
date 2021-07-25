import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Switch, Picker } from 'react-native'
import { register_style } from './register_style'
import { wp,hp } from './general_style'
import { Input } from '../input'
import firebase from 'firebase'
import { Picker as PK } from '@react-native-community/picker'
import Loader from './loading_screen'

export default class register_screen extends Component {

    constructor(props){
        super(props);

        this.state = { 
            email: '',
            pw:'',
            color_de:'white',
            accept: false,
            status: 'NO',
            loading:false
        }
    }
    
    onRegister = async (props) => {


        if (this.state.pw.length>=6) {
            props.navigation.navigate('Finalizar registro', {email:this.state.email, pw:this.state.pw})
        }
        else {
            alert("La contraseña debe contener mínimo 6 caracteres.")
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
        
        if (this.state.accept) {
            let email = this.state.email.length
            let pw = this.state.pw.length

            if (email<1 && pw<1) {

                alert("Por favor, rellena los campos.")

            }
            else {

                this.onRegister(props)

            }
        }
        else {

            alert("No has aceptado los términos y condiciones.")

        }

}   

    onTermsAndConditions = () => {
    
    if (this.state.accept===false) {
        this.setState({accept:true, status:'SI'}) 
    }
    else {
        this.setState({accept:false, status:'NO'}) 
    }
    }


    render(){

        if (this.state.loading) {
            return (<Loader/>)
        }

        return(

            <View style={register_style.background}>

                <Text style={register_style.title}>COMPLETA TUS DATOS</Text>

                <Input secure={false} text={this.state.email} function_passed={(text) => this.setState({email:text})} placeholder_title={'Correo electrónico'} color_back={this.state.color_de}/>
                <Input secure={true} text={this.state.pw} function_passed={(text) => this.setState({pw:text})} placeholder_title={'Contraseña'} color_back={this.state.color_de}/>
                <Text style={{color:'gray', fontWeight:'600',  marginTop:hp(4), marginBottom:hp(2)}}>Acepto los términos y condiciones</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.state.accept ? "#a3a" : "#0B9E72"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.onTermsAndConditions}
                    value={this.state.accept}
                />
                <Text style={{color:'black', fontWeight:'600'}}>{this.state.status}</Text>

                <this.onButton title={'CONTINUAR'} function_passed={() => this.onStepTwo(this.props)}/>

                <Text style={{color:'gray', fontWeight:'600', marginTop:hp(5)}}>CIUDADES UNIDAS</Text>

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
            age:0,
            email:this.props.route.params.email,
            password:this.props.route.params.pw
        
     }
    }


    
    onValidate = async () => {

        let name = this.state.name.length

        if (name>1 && this.state.age>=18) {
            
            this.setState({loading:true})

            try {  

                await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                await firebase.firestore().collection('users').add(
                    {
                        email:this.state.email,
                        name:this.state.name,
                        age:this.state.age,
                        date_account:Date.now()
                    }
                )
                .then(() => {
                    alert("Registrado con éxito!")
                    this.setState({loading:false})
                    this.props.navigation.navigate('Iniciar sesion')
                })
            }
            catch (error) {

                if (error.code === 'auth/email-already-in-use') {

                    alert("Este email ya está registrado!")
                    this.setState({loading:false})

                }
                if (error.code === 'auth/invalid-email') {

                    alert("Email inexistente o inválido, reescribelo.")
                    this.setState({loading:false})

                }
                if (error.code === 'auth/invalid-password'){

                    alert("Contraseña incorrecta.")
                    this.setState({loading:false})

                }
                console.log(error)
            }

        }
        else {
            alert("Escribe un nombre real y procura ser mayor de 18 años.")
        }

    }

    render(){
        return(

            <View style={register_style.background}>
            
            <View style={{marginTop:hp(0), alignItems:'center'}}>
                <Text style={register_style.title}> ¿Cómo te llamás? </Text>

                <Input function_passed={(text) => this.setState({name:text})} placeholder_title={'Nombre completo'} color_back={this.state.color_de}/>
                
                <Text style={register_style.title}>Edad</Text>
                <PK
                    selectedValue={this.state.age}
                    style={{ height: 50, width: 60, justifyContent:'center', alignItems:'center', padding:10 }}
                    onValueChange={(itemValue) => this.setState({age:itemValue})}
                >
                
                <PK.Item value={18} label={18}/>
                <PK.Item value={19} label={19}/>
                <PK.Item value={20} label={20}/>
                <PK.Item value={21} label={21}/>
                <PK.Item value={22} label={22}/>
                <PK.Item value={23} label={23}/>
                <PK.Item value={24} label={24}/>
                <PK.Item value={25} label={25}/>
                <PK.Item value={26} label={26}/>
                <PK.Item value={27} label={27}/>
                <PK.Item value={28} label={28}/>
                <PK.Item value={29} label={29}/>
                <PK.Item value={30} label={30}/>


                </PK>

                <this.onButton title={'SEGUIR'} function_passed={() => this.onValidate()} />

                <Text style={{color:'gray', fontWeight:'600', marginTop:hp(7)}}>CIUDADES UNIDAS</Text>
            </View>

            </View>

        )
    }

}