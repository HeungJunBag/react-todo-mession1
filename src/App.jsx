import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { text: '공부하기', checked: false },
        { text: '코딩하기', checked: false },
        { text: '운동하기', checked: false },
    ])
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        setTodos([{ text: form.todo.value, checked: false }, ...todos])
    }

    const removeTodo = (seletedIndex) => {
        const filterTodos = todos.filter((todo, index) => index != seletedIndex)
        setTodos(filterTodos)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button type="submit">등록</button>
            </form>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>
                        <input type="checkbox" />
                        {i} / {todo.text} <button onClick={() => removeTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
