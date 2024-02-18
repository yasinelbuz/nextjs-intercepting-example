"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

type TodosType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default function Home() {
  const [todos, setTodos] = useState<TodosType[] | null>(null);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])

  return (
    <div className="flex gap-4 flex-wrap p-10">
      {todos?.map(item => <div className="flex items-center justify-center w-36 h-36 border-2 border-cyan-200 overflow-hidden" key={item.id}>
        <Link href={"/todos/" + item.id}>{item.title}</Link>
      </div>)}
    </div>
  );
}
