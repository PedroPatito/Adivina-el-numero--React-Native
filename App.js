import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import GameScreen from './src/screens/GameScreen';
import StartGameScreen from './src/screens/StartGameScreen';
import { useFonts } from 'expo-font';
import ResultScreen from './src/screens/ResultScreen';

export default function App() {
  const[userNumber, setUserNumber] = useState()
  const[winOrLose, setWinOrLose] = useState(false)
  const[result, setResult] = useState("")


  const[loaded] = useFonts({
    UnboundedRegular: require("./src/assets/fonts/Unbounded-Regular.ttf")
  })

  const handleStartGame = selectedNumber =>{
    setUserNumber(selectedNumber)
  }

  const handleFinishGame = (selection, number) =>{
    if((selection === "menor" && userNumber < number) || 
    (selection === "mayor" && userNumber > number)){
      setResult("ganaste")
      console.log("win")
    } else {
      setResult("Perdiste")
      console.log("lose");
    }

    setWinOrLose(true)
  }




  let content = <StartGameScreen onStartGame={handleStartGame}/>

    if(userNumber && winOrLose === true){
      content = <ResultScreen result={result}/>
        
    }else if(userNumber){
      content = <GameScreen handleResult={handleFinishGame}/>
  } 
if(!loaded){
  return null
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"Adivine el numero"} newStyles={{fontFamily: "UnboundedRegular"}}/>
      <View style={{flex:1}}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
