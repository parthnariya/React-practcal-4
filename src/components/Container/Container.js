import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import styled from "styled-components";

const ContainerClass = styled.div`
  padding: 1rem;
  height: auto;
  margin: 2rem auto;
  width: 20rem;
  position: relative;
  background-color: white;
  box-shadow: 0px 10px 13px 11px rgba(0,0,0,0.1);
`;

export const Container = () => {
  return (
    <>
      <ContainerClass>
        <Header />
        <TodoList />
        <Footer />
      </ContainerClass>
    </>
  );
};
