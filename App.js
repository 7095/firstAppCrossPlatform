import { StatusBar } from 'expo-status-bar';
import React, {useStatem,useEffect, useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, TextInput } from 'react-native';
import Constant from 'expo-constants';
import { Item } from './components/item';

export default function App() {
  // const AppData =[
  //   { id: 1, name: "Apple"},
  //   { id: 2, name: "Banana"},
  //   { id: 3, name: "Orange"},
  //   { id: 4, name: "Water Melon"},
  //   { id: 5, name: "Grape"}
  // ]
  const [ data,setData ]= useState([])
  const [validInput, setValidInput ]= useState(false)
  const [ input, setInput]= useState()

  const onTextChange = (value)=>{
    setInput(value)
    if(value.length >=3 ) {
       setValidInput(true)   
    }else {
      setValidInput(false)
    }
  }

  const onSubmit =(event ) =>{
    const id =new Date().getTime().toString()
    const item = {id: id, name: input }
    setData ([...data, item ] )
    setInput(null)
  }

  const onDelete = ( id ) => {
    let items = [...data]
    let newData = items.filter ( ( item ) => {
      if( item.id !== id ) {
        return item
      }
    })
    setData( newData )
  }
  
  const Renderer = ({item}) => (<Item text={item.name} delete ={onDelete} id={item.id} />)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput 
        style={styles.input} 
        onChangeText={onTextChange } 
        placeholder="Minimum 3 characters"
        value={input}
        />
        <TouchableOpacity 
          style={(validInput)? styles.button : styles.buttonDisabled} 
          disabled={(validInput)? false:true}
          onPress={onSubmit}>
          <Text style={styles.buttontext}> Add To List</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} keyExtractor={(item)=> item.id} renderItem={Renderer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    marginTop: Constant.statusBarHeight,

  },
  header:{
    display:'flex',
    flexDirection:'row',
  },
  input:{
    backgroundColor:'white',
    fontSize:20,
    borderColor:'grey',
    borderWidth:1,
    padding:5,
    flex:1,
  },
  button:{
    backgroundColor:'lightgreen',
  },
  buttontext:{
    color:'white',
    padding:10,
  },
  buttonDisabled:{
    backgroundColor:'lightgrey',   
  },
});
