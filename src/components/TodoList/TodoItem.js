import React, { useContext } from "react";
import TaskListContext from "../../store/taskList-context";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



import styled from "styled-components";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const TodoItemClass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0.4rem;
  background-color: white;
  width: auto;
`;

const TaskTitleClass = styled.div`
  color: ${(props) => (props.completed ? "gray" : "black")};
  cursor: pointer;
`;

const TodoItem = (props) => {
  const taskCtx = useContext(TaskListContext);
  const setToComplete = () => {
    console.log(props.title);
    // console.log(event)
    taskCtx.updateItem(props.title);
  };

  return (
    <TodoItemClass onClick={setToComplete}>
      <TaskTitleClass completed={props.isCompleted}>
        {props.title}
      </TaskTitleClass>
      {props.isCompleted && <FontAwesomeIcon icon={faCircleCheck} style={{color : "#54C788"}}/>}
      {!props.isCompleted && <FontAwesomeIcon icon={faCircle} style={{color : "gray"}}/>}


    </TodoItemClass>
  );
};

export default TodoItem;
