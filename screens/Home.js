import React from 'react'
import { Image, ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import MainTile from '../components/mainTile'
import SquareTile from '../components/SquareTile'
import LongTile from './LongTile'


const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <StatusBar style="light" />
            <ImageBackground 
            source={{uri:"https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg"}} 
            style={styles.backgroundImage}>
                <Image
                    style={styles.logo}
                    source={{uri:"https://www.calm.com/_n/images/calm-logo.png"}}
                />
            <ScrollView showsHorizontalScrollIndicator={Platform.OS=="web"?false:true} removeClippedSubviews={true} style={{position:"relative",zIndex:3, height:10}}   contentContainerStyle={{paddingTop:25,alignItems:"center",justifyContent:"center"}}>
                <View style={{height:300}} />
                <MainTile/>
                <SquareTile/>
                <SquareTile/>
                <SquareTile/>
                <LongTile/>
                <LongTile/>
                <LongTile/>
            </ScrollView>
            </ImageBackground>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"black",
    },
    backgroundImage:{
        position: "relative",
        opacity: 0.8,
        flex: 1,
        resizeMode:"cover",
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        height: 100,
        width: 100,
        resizeMode:"contain",
        zIndex:0,
        position: "absolute",
        top:100
    }
})
