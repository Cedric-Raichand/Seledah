import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Home() {
  return (
    <ImageBackground source = {require("../assets/unsplash_-GFCYhoRe48.png")} style={{flex:1}}>

  
    <View>
      <Text>Home Screen for trial cedr </Text>
    </View>
    </ImageBackground>
  );
}


