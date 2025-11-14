import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts, getUserPosts, searchPosts, signOut } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import InfoBox from "../../components/InfoBox";
import { router } from "expo-router";
const Profile = () => {
const {user,setUser,setIsLoggedIn} = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(()=>getUserPosts(user.$id));


const logout= async ()=>{
await signOut();
setUser(null);
setIsLoggedIn(false)
router.replace('/sign-in')
}

  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <FlatList
        data={posts}
        //  data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
       <View style = {styles1.container}>
             <TouchableOpacity style = {styles1.container2}
             onPress={logout}
             >
                <Image source={icons.logout} style={styles1.container3} resizeMode="contain">

                </Image>
             </TouchableOpacity>
             <View style= {styles1.container4}>
                  <Image source={{uri: user?.avatar}}
                  style={styles1.container5} resizeMode="cover"></Image>
             </View>

            <InfoBox
            title={user?.username}
            containerStyle={{marginTop:5}}
            titleStyles={{fontSize:20}}
            ></InfoBox>
            <View style={styles1.container6}>

            <InfoBox
            title={posts.length||0}
            subtitle ="Posts "
            containerStyle={{marginRight:10}}
            titleStyles={{fontSize:24}}
            ></InfoBox>
            <InfoBox
            title={"1.2k"}
            subtitle=" Followers"
            titleStyles={{fontSize:24}}
            ></InfoBox>
            </View>

            <View style={styles1.container6}></View>

       </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No Videos found for this search!"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles1 = StyleSheet.create({
  container: {
   width:"100%",
   justifyContent:"center",
   alignItems: 'center',
   marginTop:6,
   marginBottom:12,
   paddingHorizontal:4
  },
  container2: {
    width:"100%",
    alignItems:"flex-end",
    marginBottom:18
  },
  container3: {
   width:26,
   height:26
  },
  container4: {
    width:46,
    height:46,
    border:1,
    borderColor:"#FF9C01",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  container5: {
   width:"90%",
   height:"90%",
   borderRadius:8
  },
  container6: {
   marginTop:5,
   display:"flex",
   flexDirection:"row",
  },
});
