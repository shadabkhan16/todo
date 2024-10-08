import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newNote, setNewNote] = useState("")

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)


    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addTodo(newNote))

        togglePopup(); // Close the popup after submission

    };



    return (
        <div>
            <button onClick={togglePopup}
                className="fixed  text-4xl bottom-4 right-16 md:right-28 lg:right-48 bg-blue-500 text-white p-6 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                <FaPlus />
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className={`p-6 rounded-lg shadow-lg max-w-sm w-full ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
                        <h2 className={`text-xl font-semibold mb-4 text-center ${theme === "dark" ? "text-white" : "text-black"}`}>NEW NOTE</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">

                                <input
                                    type="text"
                                    placeholder="Input your note..."
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) => setNewNote(e.target.value)}
                                />
                            </label>

                            <div className=" flex justify-between mt-10">

                                <button
                                    type="button"
                                    onClick={togglePopup}
                                    className="ml-4 text-blue-500  px-4 py-2 rounded-md border border-blue-500  hover:text-blue-600  hover:border-blue-600"
                                >
                                    Cancle
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddTodo
