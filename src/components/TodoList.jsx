import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos, activeCount } = useTodos()

    return (
        <div>
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
