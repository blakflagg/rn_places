import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";


class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }
  render() {
    let headingText = null;
    if (Dimensions.get('window').height > 500) {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Login</HeadingText>
          </MainText>
          <ButtonWithBackground onPress={() => alert("Hello")} color="#29aaf4">Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer} >
            <DefaultInput placeholder="E-Mail Address" style={styles.input} />
            <View style={styles.passwordContainer}>
              <View style={styles.passwordWrapper}>
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View style={styles.passwordWrapper}>
                <DefaultInput placeholder="Confirm Password" style={styles.input} />
              </View>
            </View>
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">Submit</ButtonWithBackground>
        </View>
      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "90%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  passwordContainer: {
    flexDirection: Dimensions.get('window').height > 500 ? "column" : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
    width: Dimensions.get('window').height > 500 ? "100%" : "48%"
  }
})

export default AuthScreen;