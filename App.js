/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import InputForm from "./src/components/InputForm/InputForm";
import PlaceList from './src/components/PlaceList/PlaceList';


type Props = {};
export default class App extends Component<Props> {
  state = {
    places: []
  }
  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <InputForm onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  }


});
