import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';

export const Item =(props) =>{

  const Buttons = (props) => {
  if(props.status=== true){
    return(
      <Button title="Delete" onPress={ () => props.delete( props.id ) }/>
    )
  }
  else if(props.status=== false){
    return(
      <Button title="Done" onPress={ () => props.done( props.id ) }/>
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
   
  })