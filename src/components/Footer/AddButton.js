import React from "react";
import styled from "styled-components";

const AddButtonStyle = styled.div`
  display: inline-block;
    width: 50px;
    height: 50px;
    background-color:#54C788 ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 100px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    box-shadow: 8px 8px 12px rgba(0,0,0,0.25),
                -8px -8px 12px rgba(255,255,255,0.3);
    &:hover{
        box-shadow: 8px 8px 12px rgba(0,0,0,0.25) inset,
                -8px -8px 12px rgba(255,255,255,0.3) inset;
    }
`;

const AddButton = (props) => {
  return <AddButtonStyle onClick={props.onClick}>+</AddButtonStyle>;
};

export default AddButton;
