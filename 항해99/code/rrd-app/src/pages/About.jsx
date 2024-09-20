import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const data = [
  { id: 1, todo: "리액트 배우기" },
  { id: 2, todo: "노드 배우기" },
  { id: 3, todo: "자바스크립트 배우기" },
  { id: 4, todo: "파이어 베이스 배우기" },
  { id: 5, todo: "넥스트 배우기" },
  { id: 6, todo: "HTTP 프로토콜 배우기" },
];

const About = () => {
  const location = useLocation();
  console.log(location);
  const param = useParams();
  console.log(param);

  function work() {
    const work = data.find((work) => work.id === parseInt(param.id));
    return <div>{work.todo}</div>;
  }

  return (
    <div>
      <p>{`현재 페이지 : ${location.pathname.slice(1)}`}</p>
      <Link to="/home">home으로 이동</Link>

      <div>할일 : {work()}</div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/about/${work.id}`}>
              <span style={{ cursor: "pointer" }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default About;
