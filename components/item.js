import {View,Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export const Item =(props) =>{
    const deleteItem=(id)=>{
      props.delete(id)
    }
    return(
      <View style={style.myworld}>
        <Text style={style.text}>{props.text}</Text>
        <Button title="Delete" onPress={() => deleteItem (props.id) }/>
      </View>
    )
  }

  const style =StyleSheet.create({
      
    myworld:{
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

    }
  })