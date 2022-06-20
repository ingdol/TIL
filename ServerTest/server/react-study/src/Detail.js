import { useState, useEffect, useContext } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Context1  } from './App'

export const Detail = (props) => {
  // useEffect() 안에 오래 걸리는 코드를 넣음
  //   useEffect(() => {
  //     for (let i = 0; i < 10000; i++) {
  //       console.log(1)
  //     }
  //   })

  // []에 빈값을 넣을 경우 useEffect는 한번만 실행
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setAlert(false)
  //     }, 2000)
  //   }, [])

  // return 함수 넣을 경우 clean up function

  let { id } = useParams()
  let findItem = props.shoes.find((x) => x.id == id)
  let [count, setCount] = useState(0)
  let [isAlert, setAlert] = useState(true)
  let [numInput, setNumInput] = useState('')
  let [isOpen, setOpen] = useState(1)

  let {cnt} = useContext(Context1)

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false)
    }, 2000)
    console.log(2)
    console.log(isNaN(numInput))
    if (isNaN(numInput) === true) {
      alert('숫자를 입력하세요')
      setNumInput('')
    }

    return () => {
      clearTimeout(a)
      console.log(1)
    }
  }, [numInput])

  return (
    <div className="container">
      {isAlert === true && (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      )}
      <input
        value={numInput}
        onChange={(e) => {
          setNumInput(e.target.value)
        }}
      ></input>

      <div className="row">
        {count}
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          +
        </button>
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="20%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <Outlet></Outlet>
      </div>
      {cnt}
      <br></br>

      {/* tab 버튼 만들기 */}
      <button onClick={()=>{setOpen(1)}}>1</button>
      <button onClick={()=>{setOpen(2)}}>2</button>
      <button onClick={()=>{setOpen(3)}}>3</button>
      {isOpen === 1&&<div>1 내용</div>}
      {isOpen === 2&&<div>2 내용</div>}
      {isOpen === 3&&<div>3 내용</div>}
      <TabContent isOpen = {isOpen} shoes = {props.shoes}/>
    </div>
  )
}

// props 대신 {} 안에 변수 전달하면 props 안써도 됨
const TabContent = ({isOpen, shoes}) => {
  // if (isOpen === 1) return <div>1 내용내용</div>
  // else if (isOpen === 2) return <div>2 내용내용</div>
  // else return <div>3 내용내용</div>
  let {cnt} = useContext(Context1)
  return [<div>{shoes[0].title} {cnt[0]}</div>, <div>{shoes[1].title}</div>, <div>{shoes[2].title}</div>][isOpen-1]
}
