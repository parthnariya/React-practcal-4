
import styled from "styled-components";

const TodoItemClass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  margin: 0.4rem;
  background-color: white;
  width: auto;
`;

export const TaskTitleClass = styled.div`
  color: ${(props) => (props.completed ? "gray" : "black")};
  cursor: pointer;
`;

export default TodoItemClass
