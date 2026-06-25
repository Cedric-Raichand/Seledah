import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Home() {
  return (
    <ImageBackground source = {require("../assets/unsplash_-GFCYhoRe48.png")} style={{flex:1}}>

  
    <View>
      <Text style={styles.out}>Home Screen for trial cedr </Text>
    </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  out:{
    textAlign:"center",
    justifyContent:"center",
    marginTop:20,
    color:"blue"
  },
  
})


const book = StyleSheet.create({
    outer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"lightgreen"
    },
    inner:{
        fontSize:25,
        color:"blue"

    }

})


