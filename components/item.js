import React from 'react';
import {View,Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

export const Item =(props) =>{

  const Buttons = (props) => {
  if(props.status=== true){
    return(
      <TouchableOpacity onPress={ () => props.delete( props.id ) }>
        <Image style={style.icon} source={require("../assets/trash-solid.png")}/>
      </TouchableOpacity>

    )
  }
  else if(props.status=== false){
    return(
      <TouchableOpacity onPress={ () => props.done( props.id ) }>
        <Image style={style.icon} source={require("../assets/check-solid.png")}/>
      </TouchableOpacity>
    )
  }
}
  
    return(
      <View style={style.viewStyle}>
        <Text style={ (props.status) ? style.textDone : style.text}>{props.text}</Text>
        <Buttons status={props.status} done={props.done } delete={ props.delete } id={props.id }/>
      </View>
    )
  }

  const style =StyleSheet.create({
      
    viewStyle:{
        padding:10,
        backgroundColor: '#f8fcc5',
        borderBottomColor:'black',
        borderBottomWidth:1,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    text:{
      flex:1,
      color:"#335c67",
    },
    textDone:{
      flex:1,
      textDecorationLine:"line-through",
      color:"#ff5714",
    },
    icon:{
      width:35,
      height:35,
    },
  })