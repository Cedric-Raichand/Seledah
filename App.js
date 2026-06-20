import { View, Text, StyleSheet} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Cedric Raichand</Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"yellow",
    },
    text:{
      color:"black",
      fontSize:50,
      fontWeight:"bold",
    },
  });
