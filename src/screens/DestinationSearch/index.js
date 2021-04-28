import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles.js';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import PlaceRow from './PlaceRow'

const DestinationSearch = () => {
  // const GOOGLE_MAPS_API_KEY = `${process.env.REACT_APP_GOOGLE_GOOGLE_MAPS_API_KEY}`;

  const [ originPlace, setOriginPlace ] = useState( { initialState: null } );
  const [ destinationPlace, setDestinationPlace ] = useState({
    initialState: null,
  });

  useEffect(() => {
    if ( originPlace && destinationPlace ) {
      console.warn('redirect to results page');
    }
  }, [ originPlace, destinationPlace ] );
  //
  return (
    <SafeAreaView>
      <View style={ styles.container }>
        <GooglePlacesAutocomplete
          placeholder="From?"
          enablePoweredByContainer={ false }
          supressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            seperator: styles.seperator,
          }}
          onPress={ ( data, details = null ) => {
            setOriginPlace( { value: { data, details } } );
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          renderRow={( data ) => <PlaceRow data= { data }/>}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To?"
          enablePoweredByContainer={ false }
          supressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoCompleteContainer,
              top: 55,
            },
            seperator: styles.seperator,
            listView: styles.listView,
          }}
          onPress={ ( data, details = null ) => {
            setDestinationPlace( { value: { data, details } } );
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          renderRow={( data ) => <PlaceRow data= { data }/>}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
