import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import ContainerClass from "../../styled/Container.styled.js";


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
