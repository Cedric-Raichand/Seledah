import {View, Button, StyleSheet, Text} from "react-native"

export default function Login({navigation}){
  return(
    <View>
      <Button
      title="GO TO HOME"
      onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}


