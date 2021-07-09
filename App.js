import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
//import { NavigationContainer } from "@react-navigation/native";

/* const Stack = createStackNavigator(); */

export default function App() {
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
