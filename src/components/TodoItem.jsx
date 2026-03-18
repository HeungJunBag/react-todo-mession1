import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function TodoItem({ todo }) {
    const { removeTodo, toggleTodo, updateTodo } = useTodos()
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        if (editText.trim().length === 0) {
            alert('할 일을 입력해주세요.')
            return
        }
        updateTodo(todo.id, editText)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setEditText(todo.text)
        setIsEditing(false)
    }

    return (
        <li key={todo.id}>
            <input
                type="checkbox"
                onChange={() => {
                    toggleTodo(todo.id)
                }}
                checked={todo.checked}
            />

            {isEditing ? (
                <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <button onClick={handleSave}>저장</button>
                    <button onClick={handleCancel}>취소</button>
                </>
            ) : (
                <>
                    <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>{todo.text}</span>
                    <button onClick={handleEdit}>수정</button>
                </>
            )}

            <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </li>
    )
}

export default TodoItem
