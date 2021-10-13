import { StatusBar } from 'expo-status-bar';
import React, {useStatem,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import Constant from 'expo-constants';
import { Item } from './components/item';

export default function App() {




  const AppData =[
    { id: 1, name: "Apple"},
    { id: 2, name: "Banana"},
    { id: 3, name: "Orange"},
    { id: 4, name: "Water Melon"},
    { id: 5, name: "Grape"}
  ]

  const Renderer = ({item}) =>{
    return(
      <Item text={item.name}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <FlatList data={AppData} keyExtractor={(item)=> item.id} renderItem={Renderer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constant.statusBarHeight,

  },
});
