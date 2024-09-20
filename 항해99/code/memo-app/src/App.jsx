import { useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import { useCallback } from "react";
import HeavyComponent from "./components/HeavyComponent";

function App() {
  console.log("App 렌더링");

  const [count, setCount] = useState(0);

  const initCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      <h3>카운트 예제</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>

      <HeavyComponent />
    </>
  );
}

export default App;
