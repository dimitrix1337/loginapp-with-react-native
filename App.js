import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import First_screen from './screens/first'
import login_screen from './screens/login'
import register_screen from './screens/register'


const Stack = createStackNavigator()

export default function app () {

  return (
  <NavigationContainer>

    <Stack.Navigator initialRouteName='First'>

          <Stack.Screen name='Inicio' component={First_screen}/>
          <Stack.Screen name='Registro' component={register_screen}/>
          <Stack.Screen name='Iniciar sesion' component={login_screen}/>

    </Stack.Navigator>


  </NavigationContainer>
  )
}