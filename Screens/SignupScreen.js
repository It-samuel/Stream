import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    
      <ImageBackground source={require("../assets/Images/pexels-shvetsa-4226122.jpg")} style={styles.img}>
      <View style={styles.overlay}/>
      <View style={{marginTop:40}}>
      <Text style={styles.title}>Create Your</Text>
      <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.loginCard}>
        <View>
        <Text style={styles.text}>Full Name</Text>
        <TextInput placeholder="Email" style={styles.inputs} />
        
        <Text style={styles.text1}>Gmail</Text>
        <TextInput placeholder="Email" style={styles.inputs} keyboardType='email-address'/>

        <Text style={styles.text1}>Password</Text>
        <TextInput placeholder="Password" style={styles.inputs} secureTextEntry={true}/>
        
        

        <TouchableOpacity activeOpacity ={0.7} style={styles.btn} >
          <Text style={{fontWeight:'bold',fontSize:20}}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  img:{
    width:'100%',
    height:'100%',
    flex:1,
    
    
  },
  overlay:{
    height:'100%',
    width:'100%',
    backgroundColor:"rgba(0,0,0,0.4)",
    left:0,
    right:0,
    top:0,
    bottom:0,
    justifyContent:'center',
    alignSelf:'center',
    position:'absolute'
  },
  title:{
    fontSize:35,
    color:'white',
    fontWeight:'bold',
    marginLeft:15,
    
  },
  loginCard:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    marginTop:50,
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  text:{
    fontSize:16,
    color:'#e99601',
    margin:20,
    marginTop:70,
    marginBottom:0
  },
  text1:{
    fontSize:16,
    color:'#e99601',
    margin:20,
    marginBottom:0
  },
  inputs:{
    marginHorizontal:20,
    borderBottomWidth:1,
    borderTopWidth:0,
  },
  btn:{
    height:50,
    width:250,
    backgroundColor:'#e99601',
    marginHorizontal:30,
    marginTop:80,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  }
})