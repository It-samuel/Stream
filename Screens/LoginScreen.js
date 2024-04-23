import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
      <ImageBackground source={require("../assets/Images/pexels-shvetsa-4226122.jpg")} style={styles.img}>
      <View style={styles.overlay}/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    width:'100%',
    height:'100%',
    flex:1,
    backgroundColor:'red'
    
  },
  overlay:{
    height:'100%',
    width:'100%',
    backgroundColor:"rgba(0,0,0,0.8)",
    left:0,
    right:0,
    top:0,
    bottom:0,
    justifyContent:'center',
    alignSelf:'center',
    position:'absolute'
  },
})