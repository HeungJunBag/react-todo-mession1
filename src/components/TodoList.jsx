import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos, activeCount, toggleAllTodos } = useTodos()

    const isAllChecked = todos.length > 0 && todos.every((todo) => todo.checked)

    const handleToggleAll = () => {
        toggleAllTodos(!isAllChecked)
    }

    return (
        <div>
            <button
                onClick={handleToggleAll}
                className="mb-4 text-sm text-gray-500 hover:text-indigo-500 underline underline-offset-2 transition-colors cursor-pointer"
            >
                {isAllChecked ? '모두 해제' : '모두 완료'}
            </button>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <p className="mt-6 text-sm text-gray-400 text-right">
                남은 할 일 : <span className="font-semibold text-indigo-400">{activeCount}</span> 개
            </p>
        </div>
    )
}

export default TodoList
