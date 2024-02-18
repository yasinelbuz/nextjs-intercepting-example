"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type TodosType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default function Todo({params}:any) {
    const [todo, setTodo] = useState<TodosType | null>(null)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/' + params.id)
        .then(response => response.json())
        .then(json => setTodo(json))
    }, [params.id])

  return (
    <div>
         {todo?.title}
    </div>
  )
}
