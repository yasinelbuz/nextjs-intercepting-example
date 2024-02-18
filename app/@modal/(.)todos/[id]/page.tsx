"use client"

import React, { useEffect, useState } from 'react'
import { Modal } from './modal'

type TodosType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default function TodoModal({params}:any) {
    const [todo, setTodo] = useState<TodosType | null>(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/' + params.id)
        .then(response => response.json())
        .then(json => setTodo(json))
    }, [params.id])

  return (
    <Modal>
         {todo?.title}
    </Modal>
  )
}
