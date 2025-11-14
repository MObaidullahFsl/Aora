import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts, searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";
const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(()=>searchPosts(query));

  useEffect(() => {
    refetch()
  }, [query]);
  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <FlatList
        data={posts}
        //  data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View style={styles1.container}>
            <Text style={styles1.container3}>Search Results</Text>
            <Text style={styles1.container4}>{query}</Text>
            <View style={{ marginTop: 6, marginBottom: 8 }}>
              <SearchInput initialQuery={query} />
            </View>
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

export default Search;

const styles1 = StyleSheet.create({
  container: {
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
    marginLeft: 20,
  },
  container5: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#CDCDE0",
    marginBottom: 3,
  },
});
