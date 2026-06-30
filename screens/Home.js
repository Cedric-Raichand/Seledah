import {View, Text, StyleSheet,Button} from "react-native"

export default function Home({navigation}){
  return(
    <View>
      <Text>WELCOME TO THE HOME PAGE</Text>
      <Button 
      title="GO TO PROFILE PAGE"
      onPress={()=>navigation.navigate("Profile")}/>
    </View>
  )
}