
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet,Text, View, Image } from 'react-native';
import { Link  } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect,router } from 'expo-router';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';
import 'react-native-url-polyfill/auto'
import { useGlobalContext } from '../context/GlobalProvider';
const {isLoading, isLoggedIn} = useGlobalContext;
export default function App() {
  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home"/>
  }
  return (
   <SafeAreaView style={{backgroundColor: '#161622', 
    flex: 1}}>
    <ScrollView contentContainerStyle={{height:'85%'}}> 
    <View
    style={{
      width: '100%',
      height: '100%', 
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingHorizontal: 16,
    }}
    >
      <Image
      style={styles1.container}
      resizeMode = "contain"
        source={images.logo}

      />
      <Image 
       style={styles2.container}
      resizeMode = "contain"
      source={images.cards}
      />
      <View style={{position: 'relative', marginTop: 20, }}>
        <Text style={styles3.container}>
          Find New Friends!{' '}
          <Text style={{color: '#FF8E01'}}>
            TNN
          </Text>
          <Image 
          resizeMode='contain'
          style={styles4.container}
          source={images.path}

          />
        </Text>
      </View>
      <Text style={styles5.container}>
        Where People meets new friends. Join the popular video sharing app today! 
      </Text>
      <CustomButton style={{width:'100%',marginTop:200}}
        title='Continue'
        handlePress={()=>router.push('/sign-in')}
        containerStyles=''

      />
      
    </View>
    </ScrollView>
    <StatusBar backgroundColor='#161622' style = 'light'/>
   </SafeAreaView>
   //w-full mt-7
   // making whole screen scrollable
   // bg-primary h-fulL
   // w-full justify-center items-center h-full px-4
   //w-[130px] h-[84px] resize mode = contain
   //max-w-[380px] w-full h-[300px] resize modee = contain
   //relative mt-5
   //text-3xl text-white font-bold text-center 
   //text-secondary-200
   //w-[136px] h-[15px] absolute -bottom-2 -right-8 resizemode = contain 
  // text-sm font-pregular text-gray-100 mt-7 text-center
   
  );
}

const styles1 = StyleSheet.create({
container:{
  maxWidth: 130,  
  height: 84,   
}
})

const styles2 = StyleSheet.create({
  container:{
    maxWidth: 380, 
    width: '100%', 
    height: 300,  
  }
});

const styles3 = StyleSheet.create({
  container:{
    fontSize: 24, 
    color: '#ffffff', 
    fontWeight: '700',  
    textAlign:'center'
  }
});

const styles4 = StyleSheet.create({
  container:{
    width: 136,
    height: 15,
    position: 'absolute', 
    bottom: -8, 
    right: -32, 
  }
});

const styles5 = StyleSheet.create({
  container:{
    fontSize: 14, 
    fontFamily: "Poppins-Regular", 
    color: '#f3f4f6', 
    marginTop: 28, 
    textAlign:'center'
  }
});
 