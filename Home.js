import React, { Component ,useState} from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,Image, TextInput} from 'react-native';

export default function  Home({navigation}){
const pass='123@';
const userName='Aarati';
const Auth1='False';
const [id,setId] = useState('');
const [name,setName] =useState('');
const [nameerror,setnameerror] =useState({});
const [passerror,setpasserror]=useState({});
let uerror='';
let perror='';

    

const onPressHandler = ()=>
{

    if(name == '' && id=='')
    {
       alert(`please enter required fields`)
    }
    else{
        (name==userName && id==pass)? navigation.navigate('About'):navigation.navigate('Error')
    }
    
    

    
}
const onPressHandlerReg =()=>{
    navigation.navigate('Registration');
}

    return(

        // <ImageBackground source={{uri: 'http://i.imgur.com/IGlBYaC.jpg'}} style={styles.backgroundImage}>
        <ImageBackground source={require("../assets/bg3.jpg")} style={styles.backgroundImage}>
              <View style={styles.container}>
                
             
                <View style={styles.form} >
               
                        <View style={styles.head}>
                            <Text style={styles.texthead}>Login Here</Text>
                        </View>

                        <View style={styles.uname}>
                            <Text style={styles.label}>User Name: </Text>
                            <TextInput style={styles.input}  maxLength={15} value={name} placeholder={'Enter User Name'} onChangeText={(name)=>setName(name)}/>
                        </View>
                        <Text style={styles.error}>{uerror}</Text>
                       
                        


                        <View style={styles.uname}>
                        <Text style={styles.label}>Password: </Text>
                            <TextInput secureTextEntry={true} maxLength={6} style={styles.input} value={id} placeholder={'Enter Password'} onChangeText={(id)=>setId(id)}/>
                        </View>
                         <Text>{perror}</Text> 
                        <View style={styles.button}>
                           <TouchableOpacity style={styles.btn} onPress={onPressHandler }><Text>Login</Text></TouchableOpacity>
                        </View>

                        <View style={styles.button}>      
                             <TouchableOpacity style={styles.btn}  onPress={onPressHandlerReg}><Text>Register</Text></TouchableOpacity>
                          </View>
                        
                </View>
                
              </View>
          </ImageBackground>
            );
 }
  
  



const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center', 
      textAlign:'center'
      
       
  },
  backgroundImage:
  {
      flex:1,
      width:null,
      height:null
  },
  error:
  {
      color:'red'
  },
  form:{
      borderColor:'white',
      width:400,
      height:400,
      borderRadius:10,
      borderTopLeftRadius:10,
      borderTopLeftRadius:10,
      backgroundColor:'white'
  },
  uname:{
        marginTop:20
  },
  head:
  {
      fontSize:80,
      height:55,
      backgroundColor:'#7D4BA6',
      color:'white',
      padding:10,
      marginBottom:20,
      letterSpacing:3

  },
  texthead:{
      fontSize:30
  },
  label:
  {
    //   color:"black",
    //   fontSize:15,
    //   margin:20,
    //   marginLeft:0
    height: 30, 
    textAlign:'center'

  },
  input:{
    height: 40,
    textAlign:'center',
    backgroundColor:'#CEC4D3',
    width:300,
    marginLeft:50

    
  },
  button:
  {
      marginTop:20,
      width:150,
      alignContent:'center',
      textAlign:'center',
      marginLeft:130,
      backgroundColor:'#B63B17 '
    
  },
  btn:{
    backgroundColor:'#7D4BA6',
    width:null,
    height:30,
    padding:5,
    letterSpacing:2,
    borderRadius:5
  }

});  
  





