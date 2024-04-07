import { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const handleToggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="flex flex-col items-center overflow-auto max-h-64">
            <h1 className="text-2xl font-bold mb-4 mt-0 pt-0 text-white">Tasks</h1>
            <ul className="w-64">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`flex items-center justify-between bg-white bg-opacity-30 rounded px-3 py-2 mb-2`}
                    >
                        <div className="flex items-center">
                        <input
                            id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 mr-4"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span style={{ display: 'inline-block', maxWidth: '100%', overflowWrap: 'break-word', wordWrap: 'break-word', whiteSpace: 'normal' }}>{todo.text}</span>
                        </div>
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="w-64 flex flex-col items-center">
                <input
                    type="text"
                    className="w-full rounded px-3 py-2 mb-2"
                    placeholder="Add a new todo"
                    style = {{overflowWrap: 'break-word', wordWrap: 'break-word', whiteSpace: 'normal'}}
                    value={newTodo}
                    onChange={handleInputChange}
                />
                <button
                    className=" w-full bg-blue-500 w-32 text-white py-2 rounded hover:bg-white hover:bg-opacity-50 hover:text-primarypink"
                    onClick={handleAddTodo}
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
};

export default Todo;