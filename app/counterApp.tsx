"use client"

import React, { useState } from 'react'

export default function CounterApp() {
    const [counter, setCounter] = useState(0)
    const decrement = () => {
        setCounter(counter-1)
    }
    const increment = () => {
        setCounter(counter+1)
    }
  return (
    <>
        <button onClick={decrement}>{"<"}</button>
        &nbsp;
        {counter}
        &nbsp;
        <button onClick={increment}>{">"}</button>
    </>
  )
}
