import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { wp, hp } from './screens/general_style';

export const Input = (props) => {

     const { function_passed } = props;
     const { placeholder_title } = props;


     return (

          <TextInput
          placeholder={placeholder_title}
          placeholderTextColor='#3A3A3A'
          style={input.input_style}
          onChangeText={function_passed}
          />

     )



}

const input = StyleSheet.create({

     input_style:{

               width:wp(65),
               height:hp(8),
               backgroundColor:'gray',
               color:'black',
               textAlign:'center',
               borderRadius:5,
               marginTop:hp(5),
               fontSize:wp(1.8)+wp(1.8)
       
     }

})
