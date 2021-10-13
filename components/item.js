import {View,Text, StyleSheet} from 'react-native';
import React from 'react';

export const Item =(props) =>{
    return(
      <View style={style.myworld}>
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
      myworld:{
        padding:10,
        backgroundColor: '#f8fcc5',
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
  })