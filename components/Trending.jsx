import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";
import { Video,ResizeMode } from "expo-av";
const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.05,
  },
};
const zoomOut = {
  0: {
    scale: 1.05,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      style={{ marginRight: 5 }}
      animation={activeItem=== item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
         <Video
         source={{ uri: item.video }}
         style={{
           width: 192,
           height: 252,
           borderRadius: 35,
           marginTop: 3,
           backgroundColor: '#000000', // Use a valid color value instead of 10
         }}
         resizeMode="contain"
         useNativeControls
         shouldPlay
         onPlaybackStatusUpdate={(status) => {
           if (status.didJustFinish) {
             setPlay(false);
           }
         }}
       />
      ) : (
        <TouchableOpacity
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            style={styles.container1}
            resizeMode="cover"
          ></ImageBackground>
          <Image
          source={icons.play}
          style={{
            width:22,
            height:22,
            position:"absolute"
          }}
          resizeMode="contain"
          >

          </Image>
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};
const Trending = ({ posts }) => {
  const [activeItem, setactiveItem] = useState(posts[2]);
  const viewableItemsChanged = ({ viewableItems})=>{
    if(viewableItems.length>0){
        setactiveItem(viewableItems[0].key)
    }
  }
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item}></TrendingItem>
      )}
      onViewableItemsChanged={ viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold:70
      }}
      contentOffset={{x:170}}
      horizontal
    />
  );
};

export default Trending;

const styles = StyleSheet.create({
  container1: {
    width: 192,
    height: 252,
    borderRadius: 35,
    marginVertical: 5,
    overflow: "hidden",
    // iOS Shadow
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    // Android Shadow
    elevation: 8, // Adjust to match iOS effect
  },
});
