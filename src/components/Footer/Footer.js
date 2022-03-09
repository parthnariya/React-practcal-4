import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import FooterStyleClass from "../../styled/Footer.style";
import AddButton from '../UI/AddButton.js'



const Footer = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const startAddingHandler = () => {
    setIsAdding(true);
  };
  const stopAddingHandler = () => {
    setIsAdding(false);
  };
  return (
    <FooterStyleClass>
      
      {!isAdding && <AddButton onClick={startAddingHandler}/>}
      {isAdding && <NewTaskForm onEscape={stopAddingHandler} />}
    </FooterStyleClass>
  );
};

export default Footer;
