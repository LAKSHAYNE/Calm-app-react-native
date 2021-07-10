import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const LongTile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:"https://www.teahub.io/photos/full/274-2742530_night-snow-wallpaper-hd.jpg"}} />
      <Text style={{fontSize:20,color:"white",fontWeight:"bold"}}>Calming Anxiety</Text>
      <Text style={{color:"white"}}>Meditation - Tamara Levitt</Text>
    </View>
  )
}

export default LongTile

const styles = StyleSheet.create({
  container:{
    margin: 10
  },
  img:{
    height: 270,
    width: 200,
    resizeMode:"cover",
    borderRadius:20
  }
})
