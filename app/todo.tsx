"use client"

import React, { useState } from 'react'

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([
        {todoText: "todo 1", completed: false},
        {todoText: "todo 2", completed: true},
        {todoText: "todo 3", completed: true},
        {todoText: "todo 4", completed: false}
    ])

    const onClickHandler = (el: any) => {
        console.log("el", el)

        const newTodos = todos.map((todo) => {
            console.log("todo: ", todo)

            if(todo.todoText == el.todoText){
                todo.completed = !todo.completed
            }
            return todo
        })

        console.log(newTodos)
        setTodos(newTodos)
    }
    const addTodo = () => {
        const newTodo = { todoText: todo, completed: false}
        const newTodos = { ...todos, newTodo }
        setTodos(newTodos)
        setTodo("")
        console.log()
    }
  return (
    <>
        <div>Todo</div>
        <input placeholder="Add Todo" value={todo} onChange={(e)=>{setTodo(e.target.value.toLowerCase())}} />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map((elm) => {
                return (
                    <li style={{
                        color: elm.completed ? "green" : "orange",
                        fontStyle: "oblique",
                        listStyle: "none"
                    }}
                        key={elm.todoText}>
                        <input type="checkbox" checked={elm.completed} onChange={() => { onClickHandler(elm) } } />
                        {elm.todoText}
                    </li>
                )
            })}
        </ul>
    </>
  )
}
