import React from "react";

const Box1 = ({ initCount }) => {
  console.log("Box1 렌더링");

  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: "green" }}>
      Box1
      <button onClick={initCount}>초기화</button>
    </div>
  );
};

export default React.memo(Box1);
