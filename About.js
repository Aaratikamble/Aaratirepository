import React, { Component } from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,Image} from 'react-native';

export default function About ({navigation}){


 
  return(
    
<ImageBackground source={require("../assets/bg3.jpg")} style={styles.backgroundImage}>
      <View style={styles.container}>
       <Text style={styles.text}>Welcome Aarati </Text>
    
      </View>
  </ImageBackground>
    );
  


}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center', 
      textAlign:'center',
      color:'white',
      fontSize:30
      
       
  },
  backgroundImage:
  {
      flex:1,
      width:null,
      height:null
  },
  text:
  {
    color:'black',
    fontSize:30
  }
});  
  





