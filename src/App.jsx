import { useEffect, useState } from "react";
import NewItemForm from "./components/NewItemForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue) {
      return JSON.parse(localValue);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (item) => {
    setTodos((prevTodos) => {
      return [item, ...prevTodos];
    });
  };

  const removeTodoHandler = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((item) => item.id !== id);
      return updatedTodos;
    });
  };

  const changeStatusHandler = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return updatedTodos;
    });
  };

  return (
    <div className="container">
      <NewItemForm onAdd={addTodoHandler} />
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p style={{ color: "white", fontSize: "2rem" }}>No todos found!</p>
      ) : (
        <TodoList
          todos={todos}
          onRemove={removeTodoHandler}
          onChecked={changeStatusHandler}
        />
      )}
    </div>
  );
}

export default App;
