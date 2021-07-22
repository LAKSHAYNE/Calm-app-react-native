import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Bubble from "./Bubble";

const BubbleNav = ({list}) => {
  return (
    <View
      style={{
        marginTop: 95,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{  }} 
        showsHorizontalScrollIndicator={
                Platform.OS == "web" ? false : true
              }
        contentContainerStyle={{ alignItems:"center",justifyContent:"center" }}
        horizontal={true}
      >
        {list.map((x)=><Bubble selected={x.selected} id={x.key} title={x.title}/>)}
      </ScrollView>
    </View>
  );
};

export default BubbleNav;

const styles = StyleSheet.create({});
