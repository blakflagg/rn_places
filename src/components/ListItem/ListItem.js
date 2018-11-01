import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.ListItem} >
        <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
        <Text>{props.placeName}</Text>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ListItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',

  },
  placeImage: {
    margin: 8,
    height: 30,
    width: 30
  }
})
export default ListItem