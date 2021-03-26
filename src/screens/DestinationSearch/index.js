import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles.js';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;


  const [originPlace, setOriginPlace] = useState({initialState: null});
  const [destinationPlace, setDestinationPlace] = useState({
    initialState: null,
  });

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('redirect to results page');
    }
  }, [originPlace, destinationPlace]);
  //
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From?"
          styles={{
            textInput: styles.textInput,
          }}
          onPress={(data, details = null) => {
            setOriginPlace({value: {data, details}});
          }}
          query={{
            key: API_KEY,
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To?"
          styles={{
            textInput: styles.textInput,
          }}
          onPress={(data, details = null) => {
            setDestinationPlace({value: {data, details}});
          }}
          query={{
            key: API_KEY,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
