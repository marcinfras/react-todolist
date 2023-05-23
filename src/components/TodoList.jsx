import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = ({ todos, onRemove, onChecked }) => {
  return (
    <div className={classes.todos}>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
};

export default TodoList;
