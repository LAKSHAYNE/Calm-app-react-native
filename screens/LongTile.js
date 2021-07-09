import React from "react";
import { Dimensions, Image, ImageBackground, Platform, StyleSheet, Text, View } from "react-native";

const LongTile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius:15,resizeMode:"cover"}}
        style={styles.tileImg}
        source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-s/05/b8/4b/b7/tanta-moon-luxury-villas.jpg" }}
      >
        <View style={styles.textCon}>
          <Text style={styles.tileTexth}>Daily Calm</Text>
          <Text style={styles.tileTextp}>Josh D.-Patience</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LongTile;
Platform.OS
const styles = StyleSheet.create({
  container: {
    margin:10,
    height: 100,
    width: Platform.OS=="web"?400:330,
  },
  tileImg: {
    flexDirection:"row-reverse",
    height: "100%",
    borderRadius:20,
  },
  tileTextp:{
    fontWeight:"bold",
    fontSize:15,
  },
  tileTexth:{
    fontWeight:"bold",
    fontSize:35,
  },
  textCon:{ 
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    alignItems:"center",
    justifyContent:"center",
    flex:0.7,
    backgroundColor:"white",
  opacity:0.7}
});
