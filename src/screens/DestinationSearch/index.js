import React, {useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles.js';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState({initialState: ''});
  const [destinationText, setDestinationText] = useState({initialState: ''});
  const API_KEY = `#{process.env.REACT_APP_GOOGLE_API_KEY}`

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

        <GooglePlacesAutocomplete
          // ref={'ref'}
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: {API_KEY},
            language: 'en',
          }}
        />

      </View>
    </SafeAreaView>

    
  );
};

export default DestinationSearch;
