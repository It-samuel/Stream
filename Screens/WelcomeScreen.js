import { StyleSheet, Text, View, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}) {
  return (
     
      <ImageBackground source={require("../assets/Images/pexels-shvetsa-4226122.jpg")} style={styles.img}>
        <View style={styles.overlay}/>
        <Image source={require("../assets/Images/app_logo-removebg-preview.png")} style={styles.logo} />
        <Text style={styles.text}>Welcome Back</Text>
        <View style={{marginTop:45}}>
          <TouchableOpacity style={styles.singnInbn} onPress={navigation.navigate('LoginScreen')}>
          <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpbtn} onPress={navigation.navigate('SignupScreen')}>
          <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.altText}> Login with Social Media</Text>
        {/* section for connecting with socials */}
        <View style={{flexDirection:'row', alignItems:'center' ,justifyContent:'center',marginTop:30,}}>
          <TouchableOpacity >
          <Image  source={require("../assets/Images/search.png")} style={styles.socials}/>
          </TouchableOpacity>

          <TouchableOpacity style={{marginHorizontal:20}}>
          <Image  source={require("../assets/Images/twitter.png")} style={styles.socials} tintColor='white'/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image  source={require("../assets/Images/social.png")} style={styles.socials}  />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
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
  logo:{
    width:150,
    height:100,
    alignSelf:'center',
    justifyContent:'center',
    marginTop:60
  },
  text:{
    color:'white', 
    fontSize:30,
    fontWeight:'bold', 
    marginTop:50,
    justifyContent:'center',
    alignSelf:'center'
  },
  singnInbn:{
    height:50,
    width:270,
    borderWidth:1,
    borderRadius:20,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#e99601'
  },
  signUpbtn:{
    height:50,
    width:270,
    borderWidth:1,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:15,
    marginTop:25,
    alignSelf:'center',
    backgroundColor:'#e99601'
  },
  altText:{
    justifyContent:'center',
    alignSelf:'center',
    color:'white',
    fontSize:16,
    marginTop:110
  },
  socials:{
    height:30,
    width:30,
    marginLeft:15
  },
})