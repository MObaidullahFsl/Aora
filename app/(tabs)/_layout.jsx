import { StyleSheet,Text, View,Image } from 'react-native';
import React from 'react'
import { Tab,Redirect, Tabs } from 'expo-router'
import {icons} from '../../constants'

const TabIcon =({icon,color,name,focused})=>{
    return (
        <View style = {{display:'flex',alignItems:'center',justifyContent:'center',gap:2}}>
            <Image
            source = {icon}
            resizeMode = "contain" 
            tintColor = {color}
            style = {styles1.container}></Image>
            <Text style={{
            fontSize: 10, 
            fontFamily: 'Poppins',
            fontWeight: focused ? 800 : 300,
            color:color
        }}
            numberOfLines={1}>
                {name}
            </Text>
        </View>
        //w-6 h-6
        //className = {`${focused ? 'font-psemibold':'font-pregular'} text-xs}
    )
}

const tabs_layout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
        tabBarShowLabel :false,
        tabBarActiveTintColor:'#FFA001',
        tabBarInactiveTintColor:'#CDCDE0',
        tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:1,
            borderTopColor:'#232533',
            height:84
        }
    }}
    >
        <Tabs.Screen
            name='home'
            options={
                {
                    title:'Home',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon = {icons.home}
                        color = {color}
                        name = "Home"
                        focused = {focused}
                        />
                    )
                }
            }
            />
              <Tabs.Screen
            name='create'
            options={
                {
                    title:'Create',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon = {icons.plus}
                        color = {color}
                        name = "Create"
                        focused = {focused}
                        />
                    )
                }
            }
            />
              <Tabs.Screen
            name='bookmark'
            options={
                {
                    title:'save',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon = {icons.bookmark}
                        color = {color}
                        name = "Save"
                        focused = {focused}
                        />
                    )
                }
            }
            />
              <Tabs.Screen
            name='profile'
            options={
                {
                    title:'Profile',
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                        icon = {icons.profile}
                        color = {color}
                        name = "Profile"
                        focused = {focused}
                        />
                    )
                }
            }
            />
    </Tabs>
    </>
  )
}

export default tabs_layout



const styles1 = StyleSheet.create({
container:{
width:24,
height:24
}
})


