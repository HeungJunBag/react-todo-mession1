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
            <button onClick={handleToggleAll}>{isAllChecked ? '모두 해제' : '모두 완료'}</button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <p>남은 할 일 : {activeCount} 개</p>
        </div>
    )
}

export default TodoList
