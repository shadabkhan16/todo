import { useState } from 'react';
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import AddTodo from './AddTodo';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
    const [selectedType, setSelectedType] = useState('All');

    const handleChange = (event) => {
        setSelectedType(event.target.value);
        console.log("Selected type:", event.target.value);
    };

    return (
        <div className="  min-h-screen bg-white p-6 rounded-lg shadow-lg w-3/4 mx-auto relative">
            <h1 className="text-center text-4xl font-serif mt-10 mb-5">Todo List</h1>
            <div className="w-full ">
                <div className="flex  items-center">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-solid border-r-0 rounded-l-md focus:outline-none"
                        placeholder="Search note ...."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}

                    />
                    <button

                        className="px-3 py-3  bg-white border border-solid border-l-0  rounded-r-md"
                    >
                        <PiMagnifyingGlassBold />
                    </button>
                    <div className="flex flex-col items-start space-y-2 ">

                        <select
                            id="type"
                            name="todo"
                            value={selectedType}
                            onChange={handleChange}
                            className="w-full px-4  py-2 ml-2  bg-blue-800  border rounded-md shadow-sm  text-white ">
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="Incomplete">Incomplete</option>
                        </select>
                    </div>
                    <button className="bg-blue-800 text-white ml-5 px-4 py-3 rounded-md">
                        <BsMoon />

                    </button>
                </div>
            </div>
            <AddTodo />

        </div >
    );
};

export default TodoList;

