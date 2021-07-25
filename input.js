import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { color } from 'react-native-reanimated';
import { wp, hp } from './screens/general_style';

export const Input = (props) => {

     const { function_passed } = props;
     const { placeholder_title } = props;
     const { color_back } = props;
     const { secure } = props

     const input = StyleSheet.create({

          input_style:{
     
                    width:wp(65),
                    height:hp(8),
                    backgroundColor: color_back,
                    color:'black',
                    textAlign:'center',
                    borderRadius:5,
                    marginTop:hp(5),
                    fontSize:wp(1.8)+wp(1.8),
                    borderWidth:1,
                    borderColor:'black',
                    padding:5
            
          }
     
     })

     return (

          <TextInput
          placeholder={placeholder_title}
          placeholderTextColor='#3A3A3A'
          style={input.input_style}
          onChangeText={function_passed}
          onPressIn={() => color_back = '#red'}
          secureTextEntry={secure}
          />

     )



}
// 

