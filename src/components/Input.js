import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({newStyles, ...restProps}) => {
  return (
    <View>
      <TextInput style={{...styles.input, ...newStyles}} {...restProps}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        height: 30,
        borderBottomColor:"#fff",
        borderBottomWidth: 2,
        marginVertical:10,
        width: 50,
        color: "white",
        textAlign: "center"
    }
})