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
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name="todo"
                    placeholder="할 일을 입력하세요."
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default TodoWriteForm
