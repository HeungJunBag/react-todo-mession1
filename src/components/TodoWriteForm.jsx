import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function TodoWriteForm() {
    const [text, setText] = useState('')
    const { addTodo } = useTodos()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        if (form.todo.value.trim().length == 0) {
            alert('할일을 입력해주세요.')
            return
        }

        addTodo(form.todo.value)

        form.reset()

        setText('')
    }

    return (
        <form onSubmit={handleOnSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                name="todo"
                placeholder="할 일을 입력하세요."
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
                등록
            </button>
        </form>
    )
}

export default TodoWriteForm
