import { useState } from 'react';
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import notfound from "../assets/notfound.png"
import { setSearchQuery, setFilter } from '../redux/todoSlice';
import { toggleTheme } from '../redux/themeSlice';
import { WiDaySunny } from "react-icons/wi";

const TodoList = () => {
    const [task, setTask] = useState('');

    const notesList = useSelector(state => state.todo.todo)
    const [selectedType, setSelectedType] = useState('All');
    const dispatch = useDispatch()

    const searchQuery = useSelector((state) => state.todo.searchQuery)
    const dropDownFilter = useSelector((state) => state.todo.dropDownFilter)

    const theme = useSelector((state) => state.theme.theme);


    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    // Update Tailwind's dark mode class
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }


    const handleChange = (event) => {
        setSelectedType(event.target.value);
        dispatch(setFilter(event.target.value));
    };

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchQuery(task))
        console.log("clicked")
    }



    const filteredTodos = notesList
        .filter((todo) => {
            // Check if the task is defined before calling toLowerCase
            if (todo.title) {
                return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        })
        .filter((todo) => {
            if (dropDownFilter === "Completed") return todo.isDone;
            if (dropDownFilter === "Incomplete") return !todo.isDone;
            return true; // 'all' filter
        });







    return (
        <div className="  min-h-screen bg-white p-6 rounded-lg shadow-lg w-3/4 mx-auto relative dark:bg-gray-800 ">
            <h1 className="text-center text-4xl font-serif mt-10 mb-5 dark:text-white">Todo List</h1>
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
                    {
                        theme === "dark" ? <button onClick={handleThemeToggle} className="bg-blue-800 text-white ml-5 px-4 py-3 rounded-md">
                            <WiDaySunny />
                        </button> :
                            <button onClick={handleThemeToggle} className="bg-blue-800 text-white ml-5 px-4 py-3 rounded-md">
                                <BsMoon />
                            </button>
                    }
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

