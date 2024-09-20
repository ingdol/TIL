import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todosSlice";
// import { addTodo } from "../redux/modules/todos";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: new Date().getTime(),
        title,
      })
    );
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Todo의 제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>추가</button>
      </form>
    </div>
  );
};

export default AddForm;
