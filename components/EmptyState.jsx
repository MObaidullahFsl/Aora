import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'
const EmptyState = ({title,subtitle}) => {
  return (
    <View style={styles.container1}>
        <Image source= { images.empty} style ={styles.container2} resizeMode='contain'/>
        <Text style={styles.container4}>{title}</Text>
        <Text style={styles.container3}>{subtitle}</Text>

        <CustomButton 
        title = "Create video"
        handlePress={()=>router.push('./create')}
        containerStyles={{width:"100%",marginVertical:5} }
        />
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
    container1: {
     justifyContent:"center",
     alignItems: "center",
     paddingHorizontal: 10,
    },
    container2: {
     width:270,
     height:215
    }  ,
    container3: {
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        color: "#CDCDE0",
        textAlign:"center"
      },
      container4: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
        color: "#FFFF",
        marginLeft:10,
        marginTop:2,
        textAlign:"center"
      },
});