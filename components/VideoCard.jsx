import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({video: {title, thumbnail, video, creator:{ username,avatar}}}) => {
    const [Play, setPlay] = useState(false);
  return (
    <View style={styles.container1}>
        <View style = {styles.container3}>
            <View style = {styles.container4}>
                <View style =  {styles.container5}>
                    <Image source = {{uri:avatar}} style = {styles.container6} resizeMode="cover">
                    </Image>
                </View>
                    <View style = {styles.container7}>
                        <Text style= {{color:"white", fontFamily:"Poppins-SemiBold", fontSize:14}} numberOfLines={1}>
                            {title}
                        </Text>
                        <Text numberOfLines={1} style = {styles.container2}>
                            {username}
                        </Text>

                    </View>
            </View>
            <View style= {{paddingTop:2}}>
                <Image source={icons.menu} style={{width:25,height:25}} resizeMode='contain'></Image>
            </View>
        </View>

        {Play ? (
             <Video
             source={{uri: video}}
             style={{
                 width:"100%",
                 height:192,
                 borderRadius: 30,
                 marginTop: 3
                
             }}
             resizeMode={ResizeMode.CONTAIN}
             useNativeControls
             shouldPlay
             onPlaybackStatusUpdate={( status)=>{
                 if (status.didJustFinish) {
                     setPlay(false);
                 }
             }}
             > 
     
             </Video>
        ) : (
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setPlay(true)}
            style = {{
                width:"100%",
                height: 192, marginTop:4, borderRadius: 12,
               position: "relative",
                justifyContent: "center",
                alignItems: "center"

            }}
            >
                    <Image source={{uri:thumbnail}}
                    style={{ width:"100%", height: "100%", marginTop:4, borderRadius: 12}}
                    resizeMode='cover'
                    >
                    
                    </Image>
                    <Image
                    source={icons.play}
                    style={{width:35,height:35,position:"absolute"}} resizeMode='contain'>

                    </Image>
            </TouchableOpacity>
        )
        }
    
    </View>
  )
}

export default VideoCard


const styles= StyleSheet.create({
    container1: {
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    paddingHorizontal: 5,
    marginBottom: 44
    },
    
    container2: {
   fontSize:12,
   color:"#CDCDE0",
   fontFamily: 'Poppins-Regular'
       },
    container3: {
   display: "flex",
   flexDirection: "row",
   gap:3,
   alignItems:"flex-start"
       },
    container4: {
        display: "flex",
        flexDirection: "row",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
       },
    container5: {
        width:45,
        height:46,
        justifyContent:"center",
        alignItems:"center",
        padding: 1,
        borderRadius: 8, 
        borderWidth: 1,  
        borderColor: "#FF9C01", 
       },
    container6: {
        width:'100%',
        height:'100%',
         borderRadius: 8, 
        
       },
    container7: {
        justifyContent:"center",
        display: "flex",
        flex:1,
        marginLeft: 12,
        gap: 4,
       },

})