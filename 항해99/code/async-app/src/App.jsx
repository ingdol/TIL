import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import api from "./axios/api";

const App = () => {
  // const [post, setPost] = useState(null);
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [editTodo, setEditTodo] = useState({
    title: "",
  });

  // 1. promise
  // const [message, setMessage] = useState("타이머 시작");

  // useEffect(() => {
  //   const delay = function (ms) {
  //     const promise = new Promise((resolve) => {
  //       setTimeout(resolve, ms);
  //     });

  //     return promise;
  //   };

  //   delay(2000).then(function () {
  //     setMessage("2 초 후 메시지 변경");
  //   });
  // }, []);
  // return <div>{message}</div>;

  useEffect(() => {
    // 2. fetch
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch((error) => console.error("데이터 펫칭 오류! => ", error));

    // 3. Promise.all : 병렬 처리
    // Promise.all([
    //   fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
    //     response.json()
    //   ),
    //   fetch("https://jsonplaceholder.typicode.com/posts/2").then((response) =>
    //     response.json()
    //   ),
    // ]).then(function ([res1, res2]) {
    //   console.log("res1", res1);
    //   console.log("res2", res2);
    // });

    // 4. async / await
    // const fetchPost = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/posts/1"
    //     );
    //     const data = await response.json();
    //     setPost(data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    // 5. axios
    const fetchPost = async () => {
      try {
        const { data } = await api.get("/todos");
        setTodos(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, []);
  // (원리를 꼭 이해합시다!)
  // HTTP에서는 body에 javascript 객체를 direct로 넣을 수 없어요!
  // axios는 내부적으로 JSON.stringify를 적용하기 때문에 이처럼 편리하게 사용하는 것 뿐입니다.
  const onSubmitHandler = async (todo) => {
    const { data } = await api.post("/todos", todo);
    setTodos([...todos, data]);
  };

  // 만일 fetch를 사용했다면, 이렇게 JSON.stringify를 '직접' 해주어야 해요.
  // await fetch("http://localhost:4000/todos", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(todo),
  // });
  // return <div>{post ? <div>{post.title}</div> : <div>Loading</div>}</div>;

  const onDeleteHandler = async (todoId) => {
    await api.delete(`/todos/${todoId}`);
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const onEditHandler = async (targetId, editTodo) => {
    await api.patch(`/todos/${targetId}`, editTodo);
    const newTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        return {
          ...todo,
          title: editTodo.title,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <div>
          <input
            type="text"
            placeholder="수정하고 싶은 todo id"
            onChange={(e) => setTargetId(e.target.value)}
          />
          <input
            type="text"
            placeholder="수정하고 싶은 내용"
            onChange={(e) =>
              setEditTodo({ ...editTodo, title: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => onEditHandler(targetId, editTodo)}
          >
            수정하기
          </button>
        </div>
        <input
          type="text"
          onChange={(e) => {
            setTodo({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            <button type="button" onClick={() => onDeleteHandler(todo.id)}>
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
