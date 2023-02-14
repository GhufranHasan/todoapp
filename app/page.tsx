import React from 'react'
// import CounterApp from './counterApp'
// import StrPrac from './strPrac'
import Todo from './todo'

export default function page() {
  return (
    <>
      {/* <h2>String Practice and UseState Practice</h2>
      <br />
      <StrPrac />
      <br />
      <h2>Counter App</h2>
      <br />
      <CounterApp /> */}
      <div style={{
        width: "50%",
        margin: "0 auto"
      }}>
        <Todo />
      </div>
    </>
  )
}
