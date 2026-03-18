import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">할 일 목록</h1>
                <TodoWriteForm />
                <TodoList />
            </div>
        </div>
    )
}

export default App
