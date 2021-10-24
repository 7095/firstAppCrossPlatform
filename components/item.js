import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
export const Item =(props) =>{

  //const [ name, setName ] = useState()

    return(
      <View style={style.myworld}>
        <Text style={style.text}>{props.text}</Text>
        <Button title="Delete" onPress={ () => props.delete(props.id ) }/>
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