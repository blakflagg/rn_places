import React, { Component } from "react";
import DefaultInput from "../UI/DefaultInput";

const InputForm = props => (
  <DefaultInput
    placeholder="Place Name"
    value={props.placeName}
    onChangeText={props.onChangeText} />
)

export default InputForm;