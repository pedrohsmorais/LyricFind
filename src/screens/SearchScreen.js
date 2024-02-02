import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const statusBarHeight = StatusBar.currentHeight || 40;

export default function SearchScreen({ navigation }) {
  const [autor, setAutor] = useState('');
  const [music, setMusic] = useState('');

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleClearInputs = () => {
    setAutor('');
    setMusic('');
  };

  const handleSearch = () => {
    if (autor && music) {
      navigation.navigate('LyricScreen', { autor, music });
    } else {
      Alert.alert('ERROR', 'Escreva um(a) autor(a) ou uma música!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <TouchableOpacity onPress={handleClearInputs}>
          <Text style={styles.logoSearch}>LyricFind</Text>
        </TouchableOpacity>
        <View style={styles.boxInput}>
          <TextInput
            style={styles.input}
            onChangeText={setAutor}
            placeholder="Autor"
            value={autor}
          />
          <TextInput
            style={styles.input}
            onChangeText={setMusic}
            placeholder="Música"
            value={music}
          />
          {(autor && music) ? (
            <TouchableOpacity onPress={ () => {
                handleSearch();
                handleClearInputs();
            }} style={styles.button}>
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
                    onPress={() => Alert.alert('ERROR', 'Escreva um(a) autor(a) ou uma música!')}
                    style={styles.buttonOff}
                    >
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight + 30,
  },
  logoSearch: {
    marginBottom: 80,
    alignSelf: 'center',
    fontSize: 90,
    textAlign: 'center',
  },
  boxInput: {
    height: '100%',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 60,
    width: '90%',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 16,
    marginTop: 10,
  },
  buttonOff: {
    backgroundColor: 'grey',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#35E07C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
  },
});
