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
        if(todos.some(t => t.todoText === todo)) {
            alert('Todo already exists')
            return
        }

        if (!todo) {
            alert("Input field is empty!");
            return;
        }

        const newTodo = { todoText: todo, completed: false}
        const newTodos = [ ...todos, newTodo ]
        setTodos(newTodos)
        setTodo("")
    }

    const deleteTodo = (el: any) => {
        const newTodos = todos.filter((todo) => {
            if(todo.todoText == el.todoText)
                return false
            return true
        })
        console.log("old Todos ", todos, "new Todos ", newTodos)
        setTodos(newTodos)
    }

    const clearList = () => {
        setTodos([]);
      }
  return (
    <>
        <h1 style={{fontFamily: "calibri"}}>Todo</h1>
        <input style={{
            height: "30px"
        }} placeholder="Add Todo" value={todo} onChange={(e)=>{setTodo(e.target.value.toLowerCase())}} />
        &nbsp; &nbsp; &nbsp;
        <button style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "8px",
            height: "30px",
            width: "90px",
            fontFamily: "calibri"
        }} onClick={addTodo}>Add Todo</button>
        &nbsp; &nbsp; &nbsp;
        {todos.length > 1 && (
            <button style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "8px",
                height: "30px",
                width: "90px",
                fontFamily: "calibri"
            }} onClick={clearList}>Clear List</button>
        )}
        {todos.length === 0 ? (
            <div style={{
                fontFamily: "calibri", 
                fontSize: "40px", 
                fontStyle: "oblique",
                textAlign: "center",
                color: "red"
                }}>
                Todo List is Empty
            </div>
        ) : (
            <ul>
                {todos.map((elm) => {
                    return (
                        <li style={{
                            color: elm.completed ? "green" : "orange",
                            fontFamily: "calibri",
                            fontStyle: "oblique",
                            listStyle: "none"
                        }}
                            key={elm.todoText}>
                            <input type="checkbox" checked={elm.completed} onChange={() => { onClickHandler(elm) } } />
                            {elm.todoText}
                            &nbsp; &nbsp; &nbsp;
                            <button style={{
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "8px",
                                height: "30px",
                                width: "90px",
                                fontFamily: "calibri"
                            }} onClick={() => (deleteTodo(elm))}>Delete Todo</button><br/><br/>
                        </li>
                    )
                })}
            </ul>
        )}
    </>
  )
}
