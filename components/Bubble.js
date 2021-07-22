import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Bubble = ({title,id,selected}) => {
  return (
      <View key={id}>
      <TouchableOpacity style={styles.container}>
        <Text style={selected==0?[styles.textstyle]:[styles.textstyle,styles.selected]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bubble;

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  textstyle: {
    fontSize:15,
    padding: 5,
    fontWeight:"500",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    color: "white", 
  },
  selected:{
      backgroundColor:"white"
  }
});
