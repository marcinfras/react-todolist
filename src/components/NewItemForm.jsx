import { useRef, useState } from "react";
import classes from "./NewItemForm.module.css";

const NewItemForm = ({ onAdd }) => {
  const [error, setError] = useState(false);
  const inputRef = useRef();

  const onBlurCheckHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      return setError(true);
    }

    setError(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const text = inputRef.current.value;

    if (text.trim().length > 0) {
      onAdd({
        id: Math.random(),
        title: text,
        checked: false,
      });
      inputRef.current.value = "";
      setError(false);
      return;
    }

    setError(true);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <label htmlFor="todo">New Item</label>
      <input type="text" id="todo" ref={inputRef} onBlur={onBlurCheckHandler} />
      {error && (
        <p style={{ color: "red", fontSize: "2rem" }}>Value can't be empty!</p>
      )}
      <button>Add</button>
    </form>
  );
};

export default NewItemForm;
