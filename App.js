import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import Sleep from "./screens/Sleep";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={
          {
            headerTitle:"",
            headerStyle:{height:0}
          }
        }
      ></Stack.Screen>
      <Stack.Screen name="Sleep" component={Sleep}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
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
