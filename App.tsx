

import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/Styles/Colors';
import { Styles } from './src/Styles/GlobalStyles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [firstVal, setFirstVal] = useState('');
  const [secVal, setSecVal] = useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult]  = React.useState<Number | 'Waiting' >('Waiting');


  const clear = () => {
    setFirstVal('');
    setSecVal('');
    setOperation('');
    setResult('Waiting');
}

const calculateResult = () => {
  clear();
    console.log("Before Vals: ")
    sendValues(firstVal, secVal, operation)
    console.log(result)

    switch(operation) {
        case "+":
          setResult(parseFloat(firstVal) + parseFloat(secVal));
          break;
        case "-":
          setResult(parseFloat(firstVal) - parseFloat(secVal));
          break;
        case "/":
          setResult(parseFloat(firstVal) / parseFloat(secVal));
          break;
        case "*":
          setResult(parseFloat(firstVal) * parseFloat(secVal));
          break;
    }
    console.log("After Vals: ")
    sendValues(firstVal, secVal, operation)
    
}

  useEffect(() => {
    console.log(result);
  });

function sendValues(firstVal: any, secVal : any, operation : any) {
  console.log(firstVal);
  console.log(secVal);
  console.log(operation);
};

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>

    <View style={ theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
      <StatusBar style="auto" />
      <View style={styles.title}>      
        <Text style={styles.title}>simpULATOR</Text>
      </View>
      <View style={styles.row}>
        <Text>Enter First Number:</Text>
      </View>
      <View style={styles.row}>
        <TextInput
        placeholder='Ex: 1234'
        value={firstVal}
        onChangeText={setFirstVal}
        />
      </View>
      <View style={styles.row}>
        <Text>Enter Second Number:</Text>
      </View>
      <View style={styles.row}>
        <TextInput
        placeholder='Ex: 1234'
        value={secVal}
        onChangeText={setSecVal}
          />
      </View>
      <View style={styles.row}>
        <Text>Select Operation:</Text>
      </View>
      <View style={styles.operRow}>
        <TouchableOpacity
          style={styles.operBut}
          onPress={() => setOperation("+")}
        >
          <Text style={styles.textOne}>+</Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={styles.operBut}
          onPress={() => setOperation("-")}
        >
          <Text style={styles.textOne}>-</Text>
      </TouchableOpacity>

    <TouchableOpacity
        style={styles.operBut}
        onPress={() => setOperation("*")}
      >
        <Text style={styles.textOne}>*</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.operBut}
        onPress=
        {() => setOperation("/")}
      >
      <Text style={styles.textOne}>/</Text>
    </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.result}>Result: {'' + result}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => calculateResult()}
        >
          <Text style={styles.submitBtn}>Submit</Text>
          </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
  },
  title: {
    paddingTop: 20,
    flex: 1,
    textAlign: "center",
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "900",
  },
  row: {
    maxWidth: '100%',
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 15,
  },
  operRow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
  },
  btn: {
    width: "90%",
    height: 50,
    borderRadius: 12,
    backgroundColor: myColors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  operBut: {
    flex: 1,
    backgroundColor: 'green',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    margin: 5,
  },
  textOne: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  submitBtn: {
    color: "white",
    fontSize: 20,
  },
  result: {
    fontSize: 30,
    fontWeight: '700'
  }


});
