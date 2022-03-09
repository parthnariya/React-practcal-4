import React from "react";
import AddButtonStyle from "../../styled/AddButton.style.js";

const AddButton = (props) => {
  return <AddButtonStyle onClick={props.onClick}>+</AddButtonStyle>;
};

export default AddButton;
