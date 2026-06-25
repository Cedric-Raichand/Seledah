import { View, Text, Button, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={book.first}>
      <Text>Login Screen</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const book = StyleSheet.create({
    first:{
        backgroundColor:"green",
        alignItems:"center",
        justifyContent:"center",
        flex:1
    }
})
