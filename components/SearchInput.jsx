import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React ,{ useState } from 'react'


import { icons } from '../constants'
import { router, usePathname } from 'expo-router'
   
const SearchInput = ({initialQuery}) => {
   //const [showPassword, setshowPassword] = useState(false)
    const pathname = usePathname();
    const [query, setQuery] = useState(initialQuery || "")
   
   const [isFocused, setIsFocused] = useState(false);
    return (
    
        <View style = {[styles.container2, isFocused && styles.focus]} onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}>
            <TextInput style={styles.container3} value= {query}  placeholder={"Search for something"} placeholderTextColor={"#CDCDE0"} onChangeText={(e)=> setQuery(e)} ></TextInput >
      <TouchableOpacity
      onPress={()=>{
        if(!query){
            return Alert.alert("Missing Query", "Please input something")
        }
        if (pathname.startsWith("/search")) {
            router.setParams({ query})
        }else{
            router.push(`/search/${query}`)
        }
      }}
      >

        <Image
        source={icons.search}
        style= {{ width:20, height:21}} 
        resizeMode='contain'>

        </Image>
      </TouchableOpacity>
        </View>
    
  )
}

export default SearchInput

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
        color:'white',
        marginHorizontal:4

      },
      focus: {
        borderColor: '#FF9C01',   
        flexDirection: 'row',
        justifyContent:'space-between'
        ,alignItems:'center',
        color:'white'
      },
      container3:{
        fontFamily: "Poppins-Regular", 
        color:"white",
        flex:1,
        fontSize: 16,
        marginTop:1.5

      }
})