import { TouchableOpacity,View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}
) => {
  return (
    
        <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        style={[styles.button, containerStyles,isLoading && styles.buttonLoading]}
        disabled={isLoading}
        >
            <Text   style={[styles.text, textStyles]}>{title}</Text>
        </TouchableOpacity>
        // bg-secondary rounded-xl min-h-[62px] justify-cenmter items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}
        // text-primary font-psemibold text-l ${textstyles}
      )
}     

export default CustomButton


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9C01',
    borderRadius: 12,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    width:'100%'
  },
  buttonLoading: {
    opacity: 0.5,
  },
  text: {
    color: '#161622', // text-primary
    fontFamily: 'Poppins-SemiBold', // font-psemibold
    fontSize: 18, // text-l (adjust size if needed)
    
  }
})
