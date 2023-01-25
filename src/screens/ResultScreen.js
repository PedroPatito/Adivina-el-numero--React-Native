import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import win from "../assets/images/win.png"
import lose from "../assets/images/lose.png"
import Card from '../components/Card'
import colors from '../constants/colors'
import StartGameScreen from './StartGameScreen'

const ResultScreen = ({result}) => {
    const [image, setImage] = useState("")

    useEffect (() =>{
        handleImage()
    }, [])

    const handleImage =()=>{
        if(result === "ganaste"){
            setImage(win)
            return
        }
        setImage(lose)
    }


 



    return (
    <View style={styles.container}>
        <Card>
            <Text style={{color:"white"}}>{`Vos ${result}`}</Text>
        </Card>
        <Image style={styles.imageContainer} source={image}/>
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    imageContainer:{
        height: 350,
        width: 350,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: 'contain',

    }
})