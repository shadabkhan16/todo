
import { FaPlus } from "react-icons/fa6";

const AddTodo = () => {
    return (
        <div>
            <button
                className="fixed  text-4xl bottom-4 right-16 md:right-28 lg:right-48 bg-blue-500 text-white p-6 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                <FaPlus />
            </button>
        </div>
    )
}

export default AddTodo