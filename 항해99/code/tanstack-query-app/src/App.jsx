import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const queryClient = useQueryClient();

  const [todoItem, setTodoItem] = useState("");

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/todos");
    return response.data;
  };

  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4000/todos", newTodo);
  };

  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (todos) => {
      // 원하는 값 가공
      return todos.map((todo) => {
        return { ...todo, test: 1 };
      });
    },
  });
  console.log(todos);
  // const mutation = useMutation({
  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // alert("데이터 삽입 성공");
      queryClient.invalidateQueries("todos");
    },
  });

  if (isPending) {
    return <div>로딩 중</div>;
  }

  if (isError) {
    return <div>오류 발생</div>;
  }

  return (
    <div>
      <h3>TanStack Query</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // mutation.mutate({ title: todoItem, isDone: false });
          mutate({ title: todoItem, isDone: false });
        }}
      >
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "aliceblue",
              }}
            >
              <h4>{todo.title}</h4>
              <p>{todo.isDone ? "Done" : "Not Done"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
