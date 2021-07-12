import React from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const MoreTile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 20 }}
        style={styles.tileimg}
        source={{
          uri: "https://i.ytimg.com/vi/0OS28FLKRew/maxresdefault.jpg",
        }}
      >
        <View  style={styles.content}>
          <Text style={{marginLeft:10,fontSize:30,color:"white"}}>The Spark</Text>
        </View>
        <View style={styles.symbol}>
        <Ionicons name="md-flash-sharp" size={30} color="white" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MoreTile;

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: Platform.OS == "web" ? "65%" : 330,
    backgroundColor: "black",
    borderRadius: 20,
    marginTop:10,
    marginBottom:10,
  },
  tileimg: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    opacity: 0.8,
    borderRadius: 20,
    flexDirection: "row-reverse",
  },
  content: {
    justifyContent: "center",
    flex:0.8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
  },
  symbol:{
      flex:0.2,
      justifyContent: "center",
    alignItems: "center",
  }
});
