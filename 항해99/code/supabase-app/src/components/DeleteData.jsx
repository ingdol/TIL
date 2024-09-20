import React, { useState } from "react";
import supabase from "../supabaseClient";

const DeleteData = () => {
  const [targetId, setTargetId] = useState(0);

  const handleDelete = async () => {
    const { error } = await supabase
      .from("TEST_SAMPLE")
      .delete()
      .eq("id", targetId);

    if (error) {
      console.log("error => ", error);
    }
  };

  return (
    <div
      style={{
        border: "1px solid blue",
      }}
    >
      <h2>데이터 삭제 로직</h2>
      아이디 :{" "}
      <input
        type="number"
        value={targetId}
        onChange={(e) => setTargetId(e.target.value)}
      />
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};
export default DeleteData;
