import React, {useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles.js';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState({initialState: ''});
  const [destinationText, setDestinationText] = useState({initialState: ''});

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput}
          placeholder="From"
        />
        <TextInput
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput}
          placeholder="Where To?"
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
