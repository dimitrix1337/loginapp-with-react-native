import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import firebase from 'firebase'
import Firebase from '../firebase'

export default class home extends Component {

    constructor(props){
        super(props)
    }

    onExit = async () => {

        await firebase.auth().signOut()
        .then(() => this.props.navigation.navigate('Inicio'))
        /*Alert.alert(
            "Confirmar",
            "¿Deseas salir de tu cuenta?",
            [
              {
                text: "NO",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "SI", onPress: () => { console.log("OK Pressed")
              firebase.auth().signOut()
              this.props.navigation.navigate('Inicio')
            } }
            ]
          );*/

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

