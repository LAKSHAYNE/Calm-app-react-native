import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


const BottomNav = ({navigation}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#60B1E7", "#6462E0"]}
      style={styles.container}
    >
    <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{alignItems:"center"}}>
        <Entypo name="home" size={24} color="white" />
        <Text style={{color:"white"}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Sleep",{title:"Sleep",backimage:"https://i.pinimg.com/564x/09/96/a5/0996a5a6dba0f6e7a63821981e7444f9.jpg"})} style={{alignItems:"center"}}>
        <Entypo  name="moon" size={24} color="white" />
        <Text style={{color:"white"}}>Sleep</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Sleep",{backimage:"https://images.unsplash.com/photo-1442323794357-25b2ec110967?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVycGxlJTIwc3Vuc2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",title:"Meditate"})} style={{alignItems:"center"}}>
        <Entypo name="circle" size={24} color="white" />
        <Text style={{color:"white"}}>Meditate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Sleep",{backimage:"https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",title:"Music"})} style={{alignItems:"center"}}>
        <Foundation name="music" size={24} color="white" />
        <Text style={{color:"white"}}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Sleep")} onPress={()=>navigation.navigate("More")} style={{alignItems:"center"}}>
        <AntDesign name="search1" size={24} color="white" />
        <Text style={{color:"white"}}>More</Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: Platform.OS=="web"?"100%":350,
    height: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  iconWrapper:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    paddingTop:5 
  }
  
});
