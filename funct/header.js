import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



export default function Header() {

  const openMenu = () =>{
    //navigation.openDrawer()
  }
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View>
        <Text style={styles.headerText}>Posts</Text>
      </View>

    </View>

  );


}
const styles = StyleSheet.create({
  header: {
    width:"100%",
    height: "100%",
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  icon:{
    position: 'absolute',
    left: 16
  }

});