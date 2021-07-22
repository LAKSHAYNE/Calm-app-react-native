import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomNav from "../components/BottomNav";
import BubbleNav from "../components/BubbleNav";
import MainTile from "../components/mainTile";
import LongTile from "./LongTile";


const Sleep = ({ route,navigation }) => {
  const navList = [
    {
      title: "Sleep Stories",
      key: "SleepStories",
      selected: 0,
    },
    {
      title: "Meditation",
      key: "Meditation",
      selected: 0,
    },
    {
      title: "Music",
      key: "Music",
      selected: 0,
    },
    {
      title: "Sound Scapes",
      key: "SoundScapes",
      selected: 0,
    },
    {
      title: "Avaliable Offline",
      key: "AvaliableOffline",
      selected: 0,
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title:route.params.title,
      headerLeft: () => null,
      headerTransparent: true,
      headerStyle: { backgroundColor: "transparent" },
      headerTitle: () => (
        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
          {route.params.title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 15,
              marginTop: 10,
            }}
            numberOfLines={2}
          >
            Soothing bedtime stories to help you fall into a deep and natural
            sleep
          </Text>
        </View>
      ),
    });
  }, [navigation,route]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          resizeMode: "cover",
          backgroundColor: "black",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
        imageStyle={{ opacity: 0.5 }}
        source={{
          uri: route.params.backimage,
        }}
      >
        <BubbleNav list={navList} />
        <ScrollView
          showsHorizontalScrollIndicator={Platform.OS == "web" ? false : true}
          style={{ width: "100%", position: "relative", height: 10 }}
          contentContainerStyle={{
            paddingTop: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView
            showsHorizontalScrollIndicator={
                Platform.OS == "web" ? false : true
              }
              style={{ padding:10,width: Platform.OS == "web" ? 800 : "auto" }}
              horizontal={true}
            contentContainerStyle={{ justifyContent: "center" }}
          >
            <MainTile />
            <MainTile />
            <MainTile />
            <MainTile />
          </ScrollView>
            <View
              style={{
                marginTop: 20,
                width: Platform.OS == "web" ? 800 : 330,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontSize: 17 }}>
                Eating Stress
              </Text>
              <Text style={{ color: "white", fontSize: 17 }}>
                {"See All >"}
              </Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={
                Platform.OS == "web" ? false : true
              }
              style={{ width: Platform.OS == "web" ? 800 : "auto" }}
              horizontal={true}
            >
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
            </ScrollView>
            <View
              style={{
                marginTop: 20,
                width: Platform.OS == "web" ? 800 : 330,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontSize: 17 }}>
                Meditation for Inner Peace
              </Text>
              <Text style={{ color: "white", fontSize: 17 }}>
                {"See All >"}
              </Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={
                Platform.OS == "web" ? false : true
              }
              style={{ width: Platform.OS == "web" ? 800 : "auto" }}
              horizontal={true}
            >
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
              <LongTile />
            </ScrollView>
        </ScrollView>
        <BottomNav navigation={navigation} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Sleep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
