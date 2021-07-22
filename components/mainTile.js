import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'

const MainTile = () => {
    return (
        <View style={{marginRight:10,borderBottomWidth:1,borderColor:"white"}}>
            <Image style={styles.mainImg} source={{uri:"https://i.pinimg.com/originals/12/8d/86/128d864db47fc9dc6dd6cd6a787fef3c.jpg"}} />
            <Text style={{fontSize:30,color:"white",fontWeight:"bold"}}>Daily Peace</Text>
            <Text style={{fontSize:20,color:"white",fontWeight:"normal",marginBottom:5}}>John L. Uchiha</Text>
        </View>
    )
}

export default MainTile

const styles = StyleSheet.create({
    mainImg:{
        opacity: 1,
        height: 200,
        width: Platform.OS=="web"?400:330,
        resizeMode:"cover",
        borderRadius:20
    }
})
