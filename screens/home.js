import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import Firebase from '../firebase'

export default class home extends Component {

    constructor(props){
        super(props)
    }

    onExit = async () => {

        try {
            
            Alert.alert(
                "Confirmar",
                "¿Deseas salir de tu cuenta?",
                [
                {
                    text: "NO",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "SI", onPress: () => { console.log("OK Pressed")
                    await firebase.auth().signOut()   
                    this.props.navigation.navigate('Inicio')
                } }
                ]
            );

    }
    catch (error) { alert(error) }
}

    render(){

        return(

            <View style={{alignItems:'center', justifyContent:'center'}}> 

                <Text>Welcome to Home! Coming soon we will add new features.</Text>
                
                <Text style={{fontWeight:'bold', color:'red'}}
                onPress={() => this.onExit()}
                >Salir de mi cuenta</Text>
            </View>

        )

    }

}

