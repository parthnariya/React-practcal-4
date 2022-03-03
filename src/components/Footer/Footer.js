import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import styled from "styled-components";
import AddButton from "./AddButton";

const FooterStyleClass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0.4rem;
  background-color: white;
  width: auto;
`;



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
