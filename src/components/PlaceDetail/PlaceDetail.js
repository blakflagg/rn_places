import React from 'react';
import { Modal, View, Image, Button, Text, StyleSheet } from 'react-native';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View style={styles.modalContainer}>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (

    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={() => {

      }}>
      <View>
        {modalContent}
        <View>
          <Button title="Delete" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>

  )
}
const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28

  }
})
export default PlaceDetail;