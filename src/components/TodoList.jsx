import { useState } from 'react';
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import notfound from "../assets/notfound.png"
import { setSearchQuery } from '../redux/todoSlice';

const TodoList = () => {
    const [task, setTask] = useState('');

    const notesList = useSelector(state => state.todo.todo)
    const [selectedType, setSelectedType] = useState('All');
    // const [todoFilter , setTodoFilter] = useState(notesList)
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.todo.searchQuery)
    const searchQuery = useSelector((state) => state.todo.searchQuery)



    const handleChange = (event) => {
        setSelectedType(event.target.value);
        console.log("Selected type:", event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchQuery(task))
    }
    const filteredTodos = notesList.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className="  min-h-screen bg-white p-6 rounded-lg shadow-lg w-3/4 mx-auto relative">
            <h1 className="text-center text-4xl font-serif mt-10 mb-5">Todo List</h1>
            <div className="w-full ">
                <div className="flex  items-center">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-solid border-r-0 rounded-l-md focus:outline-none"
                        placeholder="Search note ...."
                        onChange={(e) => setTask(e.target.value)}

                    />
                    <button
                        onClick={handleSearch}
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
                            className="w-full px-4  py-2 ml-2  bg-blue-800   rounded-md shadow-sm  text-white ">
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
            <div>
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((note) => <TodoItem key={note.id} note={note} />)
                ) : (
                    <span className="flex items-center justify-center">
                        <img src={notfound} alt="" />
                    </span>
                )}
            </div>
        </div >
    );
};

export default TodoList;

