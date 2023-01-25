import { Button, StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height



const StartGameScreen = ({onStartGame}) => {
  const [value, setValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState("")




  const handleConfirmation = () =>{
    const newValue = parseInt(value)
    if(newValue === NaN || newValue <= 0 || newValue > 99)return
      setConfirmed(true)
      setSelectedNumber(newValue)
      setValue("")
      Keyboard.dismiss()
  }

  const handleInput = (text) =>{
      setValue(text.replace(/[^0-9]/g,""))
  }

const handleResetInput = () =>{
  setValue("")
}

  return (
    <KeyboardAvoidingView style={{flex:1}}>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text style={styles.title}>Comenzar juego</Text>
      <Card newStyles={styles.inputContainer}>
        <Text style={styles.subTitle}>Elija un numero</Text>
        <Input
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          value={value}
          onChangeText={handleInput}
        />
        <View style={styles.buttonContainer}>
            <Pressable style={styles.cleanButton}
              onPress={handleResetInput}
            ><Text style={{color:"lightgray", fontSize: 18}}>Eliminar</Text></Pressable>
            <Pressable style={styles.confirmStyle}
              onPress={handleConfirmation}
            ><Text style={{color:"white", fontSize: 18}}>confirmar</Text></Pressable>
 
        </View>
      </Card>
      {confirmed &&(
        <Card newStyles={styles.selectedCard}>
        <Text style={{color:"white"}}>Numero elegido: </Text>
        <Text style={styles.selectedNumber} >{selectedNumber}</Text>
        <View style={styles.confirmStyle}>
        <Pressable style={styles.confirmStyle}
              onPress={()=> onStartGame(selectedNumber)}
            ><Text style={{color:"white", fontSize: 20}}>Iniciar juego</Text></Pressable>
        </View>
        </Card>
      ) }
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    width: width < 400 ? "100%" : 500,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  subTitle: {
    color: "white",
  },
  cleanButton: {
    width: 100,
    backgroundColor: colors.disableColor,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    
  },
  confirmStyle: {
    width: 100,
    color: "white",
    borderRadius: 10,
    backgroundColor: colors.actionColor,
    alignItems: "center",
    padding: 10,
  },
  selectedCard:{
    marginTop: 50,
    width: "50%",
  },
  selectedNumber:{
    color:"white",
    marginVertical: 20,
    fontSize: 35,
  }
});
