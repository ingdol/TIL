import { useState } from 'react'
import './App.css'
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Detail } from './Detail'
import axios from 'axios'

function App() {
  let [shoes, setShoes] = useState(data)

  let navigate = useNavigate()

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/detail">상세페이지로 이동</Link>
              <button
                onClick={() => {
                  navigate('/detail')
                }}
              >
                상세 이동 버튼
              </button>

              <button
                onClick={() => {
                  navigate(-1)
                }}
              >
                뒤로가기 버튼
              </button>
              <button
                onClick={() => {
                  navigate(1)
                }}
              >
                앞으로가기 버튼
              </button>
              {shoes.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/detail/${index}`)
                  }}
                >
                  <Card shoes={shoes[index]}></Card>
                </div>
              ))}
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}>
          {/* <Route path="member" element={<div>+ 멤버</div>} />
          <Route path="location" element={<div>+ 위치</div>} /> */}
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>

      {/* AJAX 통신 */}
      <button
        onClick={() => {
          axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((result) => {
              console.log(result.data)
              // let copy = [...shoes, ...result.data]
              // setShoes(copy)
              setShoes(shoes.concat(result.data))
            })
            .catch((error) => {
              console.log(error)
            })
        }}
      >
        버튼
      </button>
    </div>
  )
}

const Card = (props) => {
  return (
    <>
      <div>{props.shoes.title}</div>
      <div>{props.shoes.content}</div>
    </>
  )
}

const Event = () => {
  return (
    <>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </>
  )
}
export default App
