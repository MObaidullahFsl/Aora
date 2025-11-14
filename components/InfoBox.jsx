import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoBox = ({title,subtitle,containerStyles,titleStyles}) => {
  return (
    <View style={containerStyles}>
      <Text style={[styles.container1,{titleStyles}]}>{title}</Text>
      <Text style={styles.container2}>{subtitle}</Text>
    </View>
  )
}

export default InfoBox

const styles = StyleSheet.create({
    container1:{
      color:"white",
	  textAlign:"center",
	  fontFamily:"Poppins-SemiBold"
    },
    container2:{
      fontSize:14,
	  color:"#CDCDE0",
	  textAlign:'center',
	  fontFamily:"Poppins-Regular"
    },
})