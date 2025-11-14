import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import FormField from '../../components/FormField'
import { Video,ResizeMode } from 'expo-av'
import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import * as ImagePicker from 'expo-image-picker'
import router from 'expo-router'
import { createVideo } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const create = () => {
  const {user} = useGlobalContext();
  const [uploading, setUploading] = useState(false)
  const [form, setForm] = useState({
    title:"",
    video : null,
    thumbnail:null, 
    prompt:""
  })
  
  const openPicker =async ()=>{

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: selectType === 'image' ? ImagePicker.MediaType.Images:ImagePicker.MediaType.Videos,
        
        aspect: [4,3],
        quality:1,
      });


    if(!result.canceled){
      if(selectType === 'image'){
        setForm({...form,thumbnail:result.assets[0]})
      }
      if(selectType === 'image'){
        setForm({...form,video:result.assets[0]})
      }
    }else{
      // setTimeout(() =>{
      //   Alert.alert('Document picked',JSON.stringify(result,null,2))
      // },100)
    }
  }

  const submit = async()=>{
    if (!form.prompt || !form.title || !form.thumbnail || !form.video) {
      return Alert.alert("Please fill out all fields")
    }
    setUploading(true)
    try {
      await createVideo({
        ...form,userId:user.$id
      })
      Alert.alert('Success','Post Uploaded!')
      router.push('/home')
    } catch (error) {
      Alert.alert('Error',error.message)
      
    }finally{
      setForm({
        title:"",
        video : null,
        thumbnail:null,
        prompt:""
      })
    }
  }
  return (
 <SafeAreaView style={styles.container1}>
  <ScrollView style={styles.container2}>
    <Text style={styles.container3}>
      Upload Video
    </Text>
    <FormField style={{color:"white"}}
    title="Video Title"
    value = {form.title}
    placeholder="Give your Video a Catchy title"
    handleChangeText={(e)=>setForm({...form,title:e})}
    otherStyles={{marginTop:10}}
    >

    </FormField>
    <View style={styles.container4}>
      <Text style={styles.container5}>Upload Video</Text>
      <TouchableOpacity onPress ={()=>openPicker('video') }> 
        {form.video ? (
          <Video
          source = {{uri:form.video.uri}}
          style={styles.container6}
          resizeMode={ResizeMode.COVER}
         
          ></Video>
        ):(
          <View style={styles.container7}>
            <View style={styles.container8}>
              <Image
              source={icons.upload}
              resizeMethod='contain'
              style={styles.container9}
              >

              </Image>
            </View>
          </View>
        )
        
      }
      </TouchableOpacity>
    </View>
<View style={styles.container4}> 
    <Text style={styles.container5}>Thumbnail</Text>
    <TouchableOpacity  onPress ={()=>openPicker('image') }>
        {form.thumbnail ? (
         <Image
         source={{uri:form.thumbnail.uri}}
         resizeMethod='cover'
         style={styles.container6}
         >

         </Image>
        ):(
          <View style={styles.container10}>
            
              <Image
              source={icons.upload}
              resizeMethod='contain'
              style={{width:25,height:25}}
              >

              </Image>
            <Text style={styles.container11}>Choose a File</Text>
          </View>
        )
        
      }
      </TouchableOpacity>
    <View>

    </View>
    </View>
    <FormField
    title="Video Prompt"
    value = {form.prompt}
    placeholder="Give your Prompt"
    handleChangeText={(e)=>setForm({...form,prompt:e})}
    otherStyles={{marginTop:7}}
    >

    </FormField>
    <CustomButton
    title="Submit and publish"
    handlePress={submit}
    containerStyles={{marginTop:17}}
    isLoading={uploading}
    >

    </CustomButton>
  </ScrollView>
 </SafeAreaView>
  )
}

export default create

const styles = StyleSheet.create({
  container1:{
    backgroundColor:"#161622",
    height:"100%",
    
  },
  container2:{
    paddingHorizontal:12,
    marginVertical:20
  },
  container3:{
    fontSize:30,
    color:"white",
    fontFamily:"Poppins-SemiBold"
  },
  container4:{
    marginTop:24,
    marginVertical:2
  },
  container5:{
    fontSize:16,
    color:"#FFFF",
    fontFamily:"Poppins-Medium"
  },
  container6:{
    width:"100%",
    height:64,
    borderRadius:15,
    color:"white"
    
  },
  
  container7:{
    width:"100%",
    height:150,
    paddingHorizontal:10,
    backgroundColor:"#232533",
    borderRadius:20,
    justifyContent:"center",
    alignItems: "center",
    marginTop:15
  },
  container8: {
    width: 60,
    height: 50,
    borderWidth: 1, 
    borderStyle: 'dashed',
    borderColor: "#FF9C01",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, 
 },
  container9:{
   width:"50%",
   height:"50%"
  },
  container10:{
    width:"100%",
    height:26,
    paddingHorizontal:1,
    border: 2,
   borderColor: "#232533",
   justifyContent:"center",
   alignItems:"center",
   display:"flex",
   flexDirection:"row",
   marginHorizontal:0,
   borderRadius:20,
   color:"white"
  },
  container11:{
   fontSize:14,
   color:"#CDCDE0",
    fontFamily:"Poppins-Medium",
    marginHorizontal:10

  },
 
})