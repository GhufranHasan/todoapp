"use client"

import { useState } from "react"

export default function StrPrac() {
  // const val = "hello"
  const [val, setVal] = useState("Hello 1")
  const [val2, setVal2] = useState("Hello 2")
  const onChangeHandler = (e: any) => {
    console.log("e is", e.target.value)
    setVal(e.target.value)
  }
  const onChangeHandler2 = (e: any) => {
    console.log("e is", e.target.value)
    setVal2(e.target.value)
  }
  return (
    <>
      <input type={'text'} value={val} onChange={onChangeHandler}></input>
      <br />
      <input type={'text'} value={val2} onChange={onChangeHandler2}></input>
      <br />
      Length of Input 1: {val.length}
      <br />
      Length of Input 2: {val2.length}
    </>
  )
}
