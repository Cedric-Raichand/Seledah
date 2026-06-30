import {View, Button, StyleSheet, Text,TextInput} from "react-native"
import { useState } from "react"

export default function Login({navigation}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      <Text>
        login page
      </Text>

      <TextInput placeholder="Username" onChangeText={setUsername} style={styles.input}/>
      <TextInput placeholder="Password" onChangeText={setPassword} style={styles.output}/>

      <Button 
      title="login"
      onPress={loginUser} style={styles.you}/>
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
    marginTop:20
  },
  you:{
    marginTop:20
  }
})


