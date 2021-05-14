import React, { Component } from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,Image,} from 'react-native';

export default class Data extends Component{

    constructor(props)
    {
        super(props);
    }



render()
{
        // const {data}=this.props.route.Params;
         return(
    
        <ImageBackground source={require("../assets/bg3.jpg")} style={styles.backgroundImage}>
        <View style={styles.container}>
                <Text style={styles.text}>Username:Aarati</Text>
                <Text style={styles.text}>Email Address:aaratiakamble@gmail.com</Text>
                <Text style={styles.text}>Password:aarati@123</Text>
    
        </View>
        </ImageBackground>
            );
  
    }

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
  





