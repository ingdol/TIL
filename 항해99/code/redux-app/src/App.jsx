import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "./redux/slices/counterSlice";
// import { addNumber } from "./redux/modules/counter";

const App = () => {
  const [count, setCount] = useState(0);
  const counterReducer = useSelector((state) => state.counter);
  console.log("state", counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      {counterReducer.number}
      <br />
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button onClick={() => dispatch(addNumber(count))}>더하기</button>
    </div>
  );
};

export default App;
