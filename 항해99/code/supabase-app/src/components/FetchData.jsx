import React from "react";
import { useEffect } from "react";
import supabase from "../supabaseClient";
import { useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("TEST_SAMPLE").select("*");
      if (error) {
        console.log("error => ", error);
      } else {
        console.log("data => ", data);
        setUsers(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h3>유저정보</h3>
      {users.map((user) => {
        return (
          <div key={user.id} style={{ border: "1px solid black" }}>
            <h5>아이디 : {user.id}</h5>
            <h5>이름 : {user.name}</h5>
            <h5>나이 : {user.age}</h5>
            <h5>주소 : {user.address}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;
