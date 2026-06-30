import {View, Text, StyleSheet,ImageBackground} from "react-native"

export default function Profile({navigaion}){
    return(
    <ImageBackground source ={require("../assets/unsplash_-GFCYhoRe48.png")} style={{flex:1}}>
        <View>
            <Text style={book.next}>PROFILE PAGE INDEED</Text>
        </View>
    
    </ImageBackground>
    )
}

const book = StyleSheet.create({
    next: {
        justifyContent:"center",
        textAlign:"center",
        marginTop:500
    }
})
