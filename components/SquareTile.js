import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const SquareTile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://previews.123rf.com/images/tverdohlib/tverdohlib1908/tverdohlib190802472/129019979-happy-smiling-snow-man-on-sunny-winter-day-snowmen-happy-winter-time-snowman-and-snow-day-snowman-ge.jpg",
        }}
      />
      <View style={styles.descon}>
      <Text style={styles.maintext}>Daily Trip</Text>
      <Text style={{color:"white"}}>Meditation - Jeff Warren </Text>
      <Text style={{color:"white"}}>Monday 14:23</Text>
      </View>
    </View>
  );
};

export default SquareTile;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        width: Platform.OS=="web"?400:330,
      },
  img: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    borderRadius: 10,
},
maintext:{
    fontWeight:"bold",
    fontSize:20,
    color: "white"
},
descon:{
    display: "flex",
    justifyContent:"center",
    marginLeft:10
}
});
