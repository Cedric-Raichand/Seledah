import {View, Button, StyleSheet, Text,TextInput,TouchableOpacity} from "react-native"
import { useState } from "react"
import {Ionicons} from "@expo/vector-icons"

export default function Login({navigation}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false)
  function loginUser(){
    if (username==="Cedric" && password=="1234"){
      navigation.navigate("Home");
    }
    else{
      alert("wrong username or password")
    }
  }
  return(
    <View style ={styles.container}>

      <TextInput placeholder="Username" onChangeText={setUsername} style={styles.input}/>
      <TextInput placeholder="Password" secureTextEntry ={!showPassword} onChangeText={setPassword} style={styles.output}/>

      <Ionicons
      name={showPassword ? "eye" : "eye-off"}
      size={25}
      onPress={()=>setshowPassword(!showPassword)}/>

      <TouchableOpacity
      style={styles.loginbutton}
      onPress={loginUser}>
        <Text style = {styles.buttontext}>
          LOGIN
        </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  input:{
    width:300,
    height:50,
    borderWidth:1,
    borderRadius:10
  },
  output:{
    width:300,
    height:50,
    borderWidth:1,
    borderRadius:10,
    marginTop:20,
    marginBottom:20
  },
  loginbutton:{
    width:300,
    height:50,
    backgroundColor:"black",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  buttontext:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  }
})


