import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import First_screen from './screens/first'
import login_screen from './screens/login'
import register_screen from './screens/register'
import acerca_de from './screens/more_info';
import home from './screens/home';
import reset_password from './screens/reset_pw';
import { register_two } from './screens/register'
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator()

export default function app () {

  return (
  <NavigationContainer>

    <Stack.Navigator initialRouteName='First' animationEnabled={true}>

          <Stack.Screen name='Inicio' component={First_screen} options={{headerShown:false}}/>
          <Stack.Screen name='Registro' component={register_screen}/>
          <Stack.Screen name='Iniciar sesion' component={login_screen} options={{headerShown:false}}/>
          <Stack.Screen name='Finalizar registro' component={register_two} options={{headerTitle:'Atrás'}}/>
          <Stack.Screen name='Acerca de' component={acerca_de}/>
          <Stack.Screen name='Página principal' component={home} options={{headerShown:false, headerTitle:'Página Principal'}}/>
          <Stack.Screen name='Recuperar contraseña' component={reset_password}/>


    </Stack.Navigator>


  </NavigationContainer>
  )
}