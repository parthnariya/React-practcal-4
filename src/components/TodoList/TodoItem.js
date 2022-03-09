import React, { useContext } from "react";
import TaskListContext from "../../store/taskList-context";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import TodoItemClass ,{ TaskTitleClass } from "../../styled/TodoItem.styled";

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
      {props.isCompleted && <FontAwesomeIcon icon={faCircleCheck} style={{fontSize: "18px" ,color : "#54C788"}}/>}
      {!props.isCompleted && <FontAwesomeIcon icon={faCircle} style={{fontSize: "18px",color : "gray"}}/>}


    </TodoItemClass>
  );
};

export default TodoItem;
