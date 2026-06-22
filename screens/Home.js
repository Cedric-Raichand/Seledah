import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={book.outer}>
      <Text style = {book.inner}>Home Screen for trial</Text>
    </View>
  );
}

const book = StyleSheet.create({
    outer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"lightgreen"
    },
    inner:{
        fontSize:28,
        color:"blue"

    }

})
