import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MainTile from "../components/mainTile";
import SquareTile from "../components/SquareTile";
import LongTile from "./LongTile";
import { LinearGradient } from "expo-linear-gradient";
import BottomNav from "../components/BottomNav";


const Home = ({navigation}) => {
  
  const [opaci, setopaci] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" />
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={Platform.OS=="web"?["black","black"]:["#60B1E7","#6462E0"]}
      >
        <ImageBackground
          imageStyle={Platform.OS=="web"?{opacity:0.5}:{ opacity: opaci }}
          source={{
            uri: "https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg",
          }}
          style={styles.backgroundImage}
        >
          <Image
            style={[styles.logo,{opacity:opaci}]}
            source={{ uri: "https://www.calm.com/_n/images/calm-logo.png" }}
          />
          <Image
            source={{uri:"http://clipart-library.com/img/1745052.gif"}}
            style={[styles.flowingwater,{opacity:opaci}]}
          />
          <ScrollView 
            onScroll={(e) => {
              Platform.OS == "web"
                ? "auto"
                : setopaci(
                    opaci >= 0
                      ? 1 - e.nativeEvent.contentOffset.y * 0.003030303030303
                      : 0
                  ); 
            }}
            
            showsHorizontalScrollIndicator={Platform.OS == "web" ? false : true}
            style={{ width:"100%",position: "relative", height: 10 }}
            contentContainerStyle={{
              paddingTop: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ height: 300 }} />
            <MainTile />
            <SquareTile />
            <SquareTile />
            <SquareTile />
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
                Quick and Easy
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
          <BottomNav navigation={navigation}/>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    marginBottom:0
  },
  backgroundImage: {
    position: "relative",
    opacity: 0.8,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    opacity: 1,
    height: 100,
    width: 100,
    resizeMode: "contain",
    zIndex: 0,
    position: "absolute",
    top: 100,
  },
  flowingwater:{
    position: "absolute",
    resizeMode:"cover",
    width: "100%",
    bottom: 0,
    top:480
  }
});
