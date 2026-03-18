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
        <li className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3">
            <input
                type="checkbox"
                onChange={() => toggleTodo(todo.id)}
                checked={todo.checked}
                className="w-4 h-4 accent-indigo-500 cursor-pointer shrink-0"
            />

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                        onClick={handleSave}
                        className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded transition-colors cursor-pointer"
                    >
                        저장
                    </button>
                    <button
                        onClick={handleCancel}
                        className="text-xs bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded transition-colors cursor-pointer"
                    >
                        취소
                    </button>
                </>
            ) : (
                <>
                    <span
                        className={`flex-1 text-sm ${todo.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}
                    >
                        {todo.text}
                    </span>
                    <button
                        onClick={handleEdit}
                        className="text-xs bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded transition-colors cursor-pointer"
                    >
                        수정
                    </button>
                </>
            )}

            <button
                onClick={() => removeTodo(todo.id)}
                className="text-xs bg-red-400 hover:bg-red-500 text-white px-2 py-1 rounded transition-colors cursor-pointer"
            >
                삭제
            </button>
        </li>
    )
}

export default TodoItem
