import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import colors from '../constants/colors'

const GameScreen = ({handleResult}) => {
    const [currenteGuess, setCurrentGuess] = useState()

    useEffect(() =>{
        setCurrentGuess(Math.floor(Math.random() * (99-1) + 1))
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>La suposicion del oponente</Text>
      <Text style={styles.textColor}>{currenteGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
      <Pressable onPress={()=>handleResult("menor", currenteGuess)}><Text style={{color:"white", fontSize: 20}}>Menor</Text></Pressable>
      <Pressable onPress={()=>handleResult("mayor", currenteGuess)}><Text style={{color:"white", fontSize: 20}}>Mayor</Text></Pressable>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:"center",
        backgroundColor: colors.primary,
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "80%",
    },
    textColor:{
        color: "white",
    }
})