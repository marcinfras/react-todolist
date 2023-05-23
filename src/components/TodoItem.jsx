const TodoItem = ({ item, onRemove, onChecked }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onChecked(item.id)}
        />
        {item.title}
      </label>
      <button onClick={() => onRemove(item.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
