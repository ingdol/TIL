import React, { useState } from "react";
import supabase from "../supabaseClient";

const UpdateData = () => {
  const [targetId, setTargetId] = useState(0);
  const [address, setAddress] = useState("");

  const handleChange = async () => {
    const { error } = await supabase
      .from("TEST_SAMPLE")
      .update({
        address,
      })
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
      <h2>데이터 수정 로직</h2>
      아이디 :{" "}
      <input
        type="number"
        value={targetId}
        onChange={(e) => setTargetId(e.target.value)}
      />
      <br />
      수정주소 :{" "}
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleChange}>변경</button>
    </div>
  );
};

export default UpdateData;
