import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React ,{ useState } from 'react'


import { icons } from '../constants'
   
const FormField = ({title,value,placeholder,handleChangeText,otherStyles,textStyles,...props }) => {
   const [showPassword, setshowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    return (  
    <View style={[styles.container1,otherStyles]} >
      <Text style={ {fontSize:16, color:'white',fontFamily:"Poppins-Medium" }}>{title}</Text>
        <View style = {[styles.container2, isFocused && styles.focus]} onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}>
            <TextInput style={styles.container3} value= {value}  placeholder={placeholder}  placeholderTextColor="#CDCDE0" onChangeText={handleChangeText} secureTextEntry={title === 'Password'&& !showPassword}></TextInput >
        {title === 'Password'&& (
        <TouchableOpacity onPress = {()=> setshowPassword(!showPassword)}>
        <Image  source ={ !showPassword ? icons.eye : icons.eyehide} style={{width:20, height:20}} resizeMode = 'contain'/>
          
       
        </TouchableOpacity>
         )}
        </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
    container1:{
        marginVertical:10
    },
    container2:{
        borderWidth: 2,               
        borderColor: '#1E1E2D',       
        borderRadius: 16,             
        width: '100%',                
        height: 50,                   
        paddingHorizontal: 16,        
        backgroundColor: '#232533',   
        alignItems: 'center', 
        marginVertical:5
        ,flexDirection: 'row',
        justifyContent:'space-between'
        ,alignItems:'center',
        color:'white'

      },
      focus: {
        borderColor: '#FF9C01',   
        flexDirection: 'row',
        justifyContent:'space-between'
        ,alignItems:'center',
        color:'white'
      },
      container3:{
        fontFamily: "Poppins-SemiBold", 
        color:"white",
        flex:1,
        fontSize: 16

      }
})