import { ScrollView, StyleSheet, Text, View, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const signup = () => {
   const {setUser,setIsLoggedIn} = useGlobalContext()
  const [form, setform] = useState({
    username:'',
    email:'',
    password:''
  })
  


  const [isSubmitting, setisSubmitting] = useState(false);
const submit =async()=>{
if (!form.username || !form.email || !form.password) {
  Alert.alert('Error',"Fill in all the fields!");
}
setisSubmitting(true);

try{
const result = await createUser(form.email,form.password,form.username);
setUser(result);
setIsLoggedIn(true);

router.replace('/home');
}catch (error){
Alert.alert('Error',error.message);
}finally{
  setisSubmitting(false);
}

}
  return (
   <SafeAreaView style={styles.container1} >
<ScrollView>
  <View style={styles.container2}>
     <Image
          style={{width:115, height:35, marginLeft:'auto', marginRight:'145',marginBottom:20}}
          resizeMode = "contain"
            source={images.logo}
    
          />
        <View >
          <Text style= {[styles.container3,{marginBottom:100}]}>
            Sign Up
          </Text>
          <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e)=> setform({ ...form,
            username:e,
            
          })}
          otherStyles="marginTop:7"
          keyboardType="Username"
          ></FormField>
          <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e)=> setform({ ...form,
            email:e,
            
          })}
          otherStyles="marginTop:7"
          keyboardType="email-address"
          ></FormField>
          <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e)=> setform({ ...form,
            password:e
          })}
          otherStyles="marginTop:7"
          
          ></FormField>
          <CustomButton 
          title = "Sign Up"
          handlePress={submit}
          containerStyles={{ marginTop: 30 }}
          isLoading = {isSubmitting}
          ></CustomButton>

          <View 
          style={{
            justifyContent:'center'
            ,paddingTop:5
            ,flexDirection:'row',
            gap:2
          }}
          
          >
            <Text
            style={{
              fontSize: 16
              , color: '#CDCDE0',
              fontFamily:"Poppins-Regular"
            }}
            >
             Already have an Account? 
            </Text>
            <Link href="/sign-in"
            style={{
              fontSize: 16
              , color: '#FF9C01',
              fontFamily:"Poppins-SemiBold"

            }}
            >
                Sign In
            </Link>
          </View>
          </View>
  </View>
</ScrollView>
   </SafeAreaView>

  )
}

export default signup


const styles = StyleSheet.create({
  container1:{
    backgroundColor:'#161622',
    height:'100%',
    paddingLeft:10,
    minHeight:'100%',
    flex:1
  }, 
  container2:{
    width:'100%',
    justifyContent:'center',
    minHeight:'35%',
    paddingHorizontal:4,
    marginVertical:6,
    flex:1
  },container3:{
    fontSize: 24, 
    color: '#ffffff', 
    fontWeight: '700',
    marginTop:20,
    
    fontFamily:"Poppins-SemiBold"  
  }
  })