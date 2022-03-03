import { useReducer } from "react";
import TaskListContext from "./taskList-context";

const defaultListState = {
  items: JSON.parse(localStorage.getItem("todo")) || [],
};

const listReducer = (prevState, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedList = prevState.items.concat(action.item);
    localStorage.setItem("todo", JSON.stringify(updatedList));
    // console.log(updatedList)
    return {
      items: updatedList,
    };
  }
  if (action.type === "UPDATE_ITEM") {
    // const updatedList = prevState.items.concat(action.item)
    // localStorage.setItem('todo',JSON.stringify(updatedList))
    // console.log(updatedList)
    const currentList = JSON.parse(localStorage.getItem("todo"));
    const updatedList = currentList.map((obj) => {
      if (obj.title === action.item) {
        // console.log({...obj , isCompleted:true})
        return { ...obj, isCompleted: !obj.isCompleted };
      }
      return obj;
    });
    localStorage.removeItem("todo");
    localStorage.setItem("todo", JSON.stringify(updatedList));
    console.log(updatedList);
    return {
      items: updatedList,
    };
  }

  return defaultListState;
};

const TaskListProvider = (props) => {
  const [listState, dispatchListActiion] = useReducer(
    listReducer,
    defaultListState
  );

  const addItemToListHandler = (item) => {
    dispatchListActiion({ type: "ADD_ITEM", item: item });
  };
  const updateItemHandler = (item) => {
    dispatchListActiion({ type: "UPDATE_ITEM", item: item });
  };

  const listCtx = {
    items: listState.items,
    addItem: addItemToListHandler,
    updateItem: updateItemHandler
  };

  return (
    <TaskListContext.Provider value={listCtx}>
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListProvider;
