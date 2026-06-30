import {View, Button, StyleSheet, Text,TextInput} from "react-native"
import { useState } from "react"

export default function Login(){
  const [username, setUsername] = useState("");
  return(
    <View>
      <TextInput placeholder="Enter username"
      onChangeText={setUsername}/>
      <Text>{username}</Text>
    </View>
  )
}


