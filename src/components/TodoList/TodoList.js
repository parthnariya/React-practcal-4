import React, { useContext, useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TaskListContext from "../../store/taskList-context";
import styled from "styled-components";

const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 19rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  
`;
const TodoList = (props) => {
  const taskCtx = useContext(TaskListContext);
  // const ctx = useContext(TaskListContext);
  const [taskList, setTaskList] = useState(taskCtx.items);
  useEffect(() => {
    setTaskList(taskCtx.items);
  }, [taskCtx]);

  return (
    <TodoListStyle>
      {taskList.length === 0 ? (
        <p>enter task using below + button</p>
      ) : (
        taskList.map((i ,index) => (
          <TodoItem key={index} title={i.title} isCompleted={i.isCompleted} />
        ))
      )}
    </TodoListStyle>
  );
};

export default TodoList;
