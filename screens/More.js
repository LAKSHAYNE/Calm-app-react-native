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
import { EvilIcons } from "@expo/vector-icons";

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
      
        <View style={styles.searchArea}>
          <EvilIcons name="search" size={24} color="grey" />
          <TextInput style={[Platform.select({web:{
            outlineWidth:0
          }}),styles.textInput]} placeholder="Search" />
        </View>
    
        <ScrollView
          showsVerticalScrollIndicator={Platform.OS=="web"?false:true}
          contentContainerStyle={{ alignItems: "center" }}
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
    backgroundColor:"black"
  },
  background: {
    resizeMode: "cover",
    backgroundColor: "black",
    alignItems: "center",
    flex: 1,
    justifyContent:"center"
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
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    flex: 1,
    padding: 10,
    color: "grey",
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    color: "black"
  },
  searchArea: {
    width: Platform.OS == "web" ? "50%" : 330,
    borderRadius: 30,
    alignItems: "center",
    paddingLeft:10 ,
    marginTop: 65,
    flexDirection: "row",
    backgroundColor: "#ECECEC",
  },
  scroll: {
    height: 0,
    zIndex:0,
    marginTop: 10,
    width: Platform.OS == "web" ? "100%" : 330,
  },
});
