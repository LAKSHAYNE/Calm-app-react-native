import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const More = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "More",
      headerLeft: () => null,
      headerTransparent: true,
      headerStyle: { backgroundColor: "transparent" },
      headerTitle: () => (
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "transparent",
          }}
        >
          <View style={[{flexDirection:"row"}]}>
            {Platform.OS === "web" && (
              <TouchableOpacity onPress={navigation.goBack} style={{justifyContent:"center"}} >
                <Ionicons name="caret-back" size={24} color="black" />
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.iconWrapper}>
              <Feather name="settings" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialIcons name="account-circle" size={26} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ImageBackground
      imageStyle={{ opacity: 0.5 }}
      source={{
        uri: "https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg",
      }}
      style={styles.background}
    ></ImageBackground>
  );
};

export default More;

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    flex: 1,
    backgroundColor: "black",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 35,
    width: 35,
    backgroundColor: "black",
  },
});
