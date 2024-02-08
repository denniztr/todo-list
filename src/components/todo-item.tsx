type TodoItemProps = {
    id: string
    title: string
    completed: Boolean
}

export function TodoItem({ id, title, completed }: TodoItemProps) {
    return (
        <li className='flex gap-1 items-center'>
            <input className='cursor-pointer peer' id={id} type='checkbox'/>
            <label className='cursor-pointer peer-checked:line-through peer-checked:text-slate-300' htmlFor={id}>{title}</label>
        </li>
    )
}