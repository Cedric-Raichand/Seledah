import {View, Text, StyleSheet,Button} from "react-native"

export default function Home({navigation}){
  return(
    <View>
      <Text style={styles.no}>WELCOME TO THE HOME PAGE</Text>
      <Button 
      title="GO TO PROFILE PAGE"
      onPress={()=>navigation.navigate("Profile")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  no:{
    marginTop:500
  }
})