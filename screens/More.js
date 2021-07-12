import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import MoreTile from "../components/MoreTile";
import BottomNav from "../components/BottomNav";

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
          <View style={[{ flexDirection: "row" }]}>
            {Platform.OS === "web" && (
              <TouchableOpacity
                onPress={navigation.goBack}
                style={{ justifyContent: "center" }}
              >
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
      <SafeAreaView style={styles.container}>
    <ImageBackground
      imageStyle={{ opacity: 0.5 }}
      source={{
        uri: "https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg",
      }}
      style={styles.background}
    >
        <TextInput style={styles.textInput} placeholder="Search" />
        <ScrollView
          contentContainerStyle={{alignItems: "center" }}
          style={styles.scroll}
        >
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
          <MoreTile />
        </ScrollView>
        <BottomNav navigation={navigation} />
    </ImageBackground>
      </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    resizeMode: "cover",
    backgroundColor: "black",
    alignItems:"center",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 35,
    width: 35,
    backgroundColor: "black",
  },
  textInput: {
    marginTop: 65,
    width: Platform.OS == "web" ? "50%" : 330,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    borderWidth: 1,
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
  scroll: {
    position: "relative",
    width: "100%",
    marginTop: 10,
    width: Platform.OS == "web" ? "100%" : 330,
  },
});
