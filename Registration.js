import React, { Component ,useState} from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,TextInput} from 'react-native';

export default function Registration ({navigation}){

    const [id,setId] = useState('');
    const [name,setName] =useState('');
    const[email,setEmail]=useState('');

    // const onPressHandler = ()=>
    // {
    //   navigation.navigate('Data');
    // }
    const onPressHandler = ()=>
    {

    if(name == '' || id=='' || email=='')
    {
      alert('please enetr all the fields')
    }
    else{
        navigation.navigate('Data');
    }
    
    

    
}

return(
    
<ImageBackground source={require("../assets/bg3.jpg")} style={styles.backgroundImage}>
      <View style={styles.container}>
    
      <View style={styles.form} >
               
               <View style={styles.head}>
                   <Text style={styles.texthead}>Register Here</Text>
               </View>

               <View style={styles.uname}>
                   <Text style={styles.label}>User Name: </Text>
                   <TextInput style={styles.input}  maxLength={15} value={name} placeholder={'Enter User Name'} onChangeText={(name)=>setName(name)}/>
               </View>
               
               <View style={styles.uname}>
                   <Text style={styles.label}>User Email Address: </Text>
                   <TextInput style={styles.input}  maxLength={30} value={email} placeholder={'Enter Email Address'} onChangeText={(email)=>setEmail(email)}/>
               </View>
               


               <View style={styles.uname}>
               <Text style={styles.label}>Password: </Text>
                   <TextInput secureTextEntry={true} maxLength={6} style={styles.input} value={id} placeholder={'Enter Password'} onChangeText={(id)=>setId(id)}/>
               </View>
                
                
               <View style={styles.button}>
                  <TouchableOpacity style={styles.btn} onPress={onPressHandler} ><Text>Submit</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Data',{test:"Aarati"});}} ><Text>Submit</Text></TouchableOpacity> */}
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
        height:500,
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
      marginTop:50,
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
    
    





