import { Container } from "./components/Container/Container";
import TaskListProvider from "./store/TaskListProvider";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
    <TaskListProvider>
      <Main>
        <Container />
      </Main>
    </TaskListProvider>
  );
}

export default App;
