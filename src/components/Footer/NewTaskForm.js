import React, { useState, useContext } from "react";
import TaskListContext from "../../store/taskList-context";
import InputDiv from "../../styled/InputDiv.styled";
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
    <InputDiv
      placeholder="enter new task"
      type="text"
      value={enteredTitle}
      onChange={onTitleChangeHandler}
      onKeyDown={onAddTaskHandler}
    />
  );
};

export default NewTaskForm;
