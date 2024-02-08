'use client'

type TodoItemProps = {
    id: string
    title: string
    completed: boolean
    toggleTodo: (id: string, completed: boolean) => void
}

export function TodoItem({ id, title, completed, toggleTodo }: TodoItemProps) {
    return (
        <li className='flex gap-1 items-center'>
            <input
                className='cursor-pointer peer'
                id={id} type='checkbox'
                defaultChecked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <label
                className='cursor-pointer peer-checked:line-through peer-checked:text-slate-300'
                htmlFor={id}
            >
                {title}
            </label>
        </li>
    )
}