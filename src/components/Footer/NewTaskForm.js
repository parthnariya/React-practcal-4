import React, { useState, useContext } from "react";
import TaskListContext from "../../store/taskList-context";
import styled from "styled-components";

const InputDiv = styled.input`
  font-size: 1rem;
  line-height: 1.5;
  padding: 11px 23px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0;
  outline: 0;
  background-color: transparent;
`;
const NewTaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const listCtx = useContext(TaskListContext);
  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onAddTaskHandler = (event) => {
    // event.preventDefault();

    if (event.key === "Enter") {
      if (enteredTitle.trim().length === 0) {
        alert("invalid");
        return;
      }
      listCtx.addItem({ title: enteredTitle, isCompleted: false });
      setEnteredTitle("");
      props.onEscape();
    }
    if (event.key === "Escape") {
      props.onEscape();
      return;
    }
  };

  return (
    <div>
      <InputDiv
        placeholder="enter new task"
        type="text"
        value={enteredTitle}
        onChange={onTitleChangeHandler}
        onKeyDown={onAddTaskHandler}
      />
    </div>
  );
};

export default NewTaskForm;
