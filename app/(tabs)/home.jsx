import { StyleSheet, View, Text, FlatList, Image, RefreshControl, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants'
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useGlobalContext } from "../../context/GlobalProvider";
const Home = () => {
  const {user,setUser,setIsLoggedIn} = useGlobalContext()
  const {data :posts,refetch} = useAppwrite(getAllPosts);
  const {data :latestPosts} = useAppwrite(getLatestPosts);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = async() =>{
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
    
  }
  
  return (
    <SafeAreaView style={{ backgroundColor: "#161622" , height:'100%' }}>
      <FlatList
        data={posts}
        
        //  data={[]} 
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video = {item}/>
        )}
        ListHeaderComponent={() => (
          <View style={styles1.container}>
            <View style={styles1.container2}>
              <View>
                <Text style={styles1.container3}>Welcome Back</Text>
                <Text style={styles1.container4}>{user?.username}</Text>
              </View>
              <View style= {{marginTop:1.5}}>
                <Image source={images.logoSmall}
                style={{width:38, height: 39
                }} resizeMode="contain"></Image>
              </View>
            </View>
            <SearchInput />
            <View style = {{
              width:'100%',
              display:"flex",
              flex:1,
              paddingTop:5,
              paddingBottom: 8
            }}>
              <Text style= {styles1.container5}>
                Latest Videos
              </Text>
              <Trending posts ={latestPosts ?? []} />

             
            </View>
          </View>
  )}
  ListEmptyComponent={()=>(
    <EmptyState 
    title="No Videos Found"
    subtitle= "Be the First One to Upload a Video"
    />
  )}
    refreshControl={<RefreshControl refreshing= {Refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles1 = StyleSheet.create({
  container: {
    marginTop: 24,
    marginVertical: 6,
    paddingHorizontal: 4,
  },
  container2: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },
  container3: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#CDCDE0",
  },
  container4: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "#FFFF",
    marginLeft:20
  },
  container5: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#CDCDE0",
    marginBottom:3
  },
});
