import {prisma} from "@/db";
import {TodoItem} from "@/components/todo-item";
import Link from "next/link";

function getTodos() {
    return prisma.todo.findMany()
}

async function toggleTodo(id: string, completed: boolean) {
    'use server'

    await prisma.todo.update({
        where: {
            id
        },
        data: {
            completed
        }
    })
}

export default async function Home() {
    const todos = await getTodos()

    return (
        <>
            <header className='flex justify-between items-center'>
                <h1 className='text-2xl tracking-wider font-mono font-semibold'>Todos</h1>
                <Link className='text-xs tracking-wide border-2 rounded-md px-2 py-1 bg-transparent hover:bg-zinc-50/10 focus-within:bg-zinc-50/10 outline-none' href='/new'>New</Link>
            </header>
            <ul className='pl-4 py-4'>
                {todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </>
    )
}