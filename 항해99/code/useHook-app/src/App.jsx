import { useState } from "react";
import { Child } from "./Child";
import { useRef } from "react";
import { useEffect } from "react";
import GrandFather from "./components/GrandFather";

function App() {
  // useState
  const [count, setCount] = useState(0);

  // useRef
  // const ref = useRef("초기값");
  // console.log("ref", ref);

  // ref.current = "바꾼 값";
  // console.log("current => ", ref);
  const countRef = useRef(0);
  const idRef = useRef("");

  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <>
      {/* useState */}
      <h1>useState</h1>
      {count} <br />
      <Child setCount={setCount} />
      {/* useRef */}
      <h1>useRef</h1>
      {countRef.current} <br />
      <button onClick={() => countRef.current++}>1 증가</button>
      <div>
        아이디 : <input type="text" ref={idRef} />
      </div>
      {/* useContext */}
      <h1>useContext</h1>
      <GrandFather />
    </>
  );
}

export default App;
