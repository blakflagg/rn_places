import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default class extends Component {
  state = {
    placeName: ""
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (

      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          placeholder='An awesome place'
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button title="Add" onPress={this.placeSubmitHandler} style={styles.placeButton} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
})