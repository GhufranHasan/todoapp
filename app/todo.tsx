"use client"

import React, { useState } from 'react'
import TodoItem from './todoItem'

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([
        {todoText: "todo 1", completed: false},
        {todoText: "todo 2", completed: true},
        {todoText: "todo 3", completed: true},
        {todoText: "todo 4", completed: false}
    ])

    const [inputError, setInputError] = useState(false)

    const [showDeleteAll, setShowDeleteAll] = useState(false)

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
        if (todo.trim() === '') {
        setInputError(true)
        return
        }

        if(todos.some(t => t.todoText === todo)) {
            alert('Todo already exists')
            return
        }

        if (todos.length > 0) {
            setShowDeleteAll(true)
        }

        const newTodo = { todoText: todo, completed: false}
        const newTodos = [ ...todos, newTodo ]
        setTodos(newTodos)
        setTodo("")
        setInputError(false)
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
        setTodos([])
        setShowDeleteAll(false)
      }
  return (
    <>
        <h1 style={{fontFamily: "calibri"}}>Todo</h1>
        <input style={{
            height: "30px"
        }} placeholder="Add Todo" 
        value={todo} 
        onChange={(e)=>{setTodo(e.target.value); setInputError(false)}} />
        &nbsp; &nbsp; &nbsp;
        <button style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "8px",
            height: "30px",
            width: "90px",
            fontFamily: "calibri"
        }} onClick={addTodo} disabled={inputError}>Add Todo</button>
        &nbsp; &nbsp; &nbsp;
        {todos.length !== 0 && (
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
    {todos.map((todo) => (
                <TodoItem
                    key={todo.todoText}
                    todo={todo}
                    onClick={(todo: any) => onClickHandler(todo)}
                    onDelete={(todo: any) => deleteTodo(todo)}
                />
                ))}
            </ul>
        )}
    </>
  )
}
