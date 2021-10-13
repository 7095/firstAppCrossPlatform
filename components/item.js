import {View,Text, StyleSheet} from 'react-native';
import React from 'react';

export const Item =(props) =>{
    return(
      <View style={style.container}>
        <Text>{props.text}</Text>
      </View>
    )
  }

  const style =StyleSheet.create({
      container:{
          padding:10,
          backgroundColor: 'yellow',
          borderBottomColor:'black',
          borderBottomWidth:1,
      },
  })