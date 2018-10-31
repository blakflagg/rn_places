import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ListItem = (props) => (
  <View style={styles.ListItem}>
    <Text>{props.placeName}</Text>

  </View>
);

const styles = StyleSheet.create({
  ListItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 6
  }
})
export default ListItem