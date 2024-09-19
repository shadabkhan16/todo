import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo, updateTodo } from "../redux/todoSlice";
import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ note }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(note.title); // Local state to hold the new title
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(note.id));  // Toggle isDone
    };

    const handleDelete = () => {
        dispatch(removeTodo(note.id));  // Delete task
    };

    const handleEditClick = () => {
        setIsEditing(true);  // Enable editing mode
    };

    const handleSaveClick = () => {
        if (editValue.trim() !== "") {
            dispatch(updateTodo({ id: note.id, title: editValue }));  // Dispatch update action
            setIsEditing(false);  // Exit editing mode
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);  // Cancel editing
        setEditValue(note.title);  // Reset the title value
    };

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={note.isDone}
                    onChange={handleToggle}
                    className="mr-3 w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="text-lg font-bold border border-gray-300 rounded px-2 py-1"
                    />
                ) : (
                    <span className={`${note.isDone ? 'line-through text-gray-500' : 'text-black'} text-lg font-bold`}>
                        {note.title}
                    </span>
                )}
            </div>
            <div className="flex space-x-2">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSaveClick}
                            className="bg-green-500 text-white px-2 py-1 rounded-md"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="bg-gray-500 text-white px-2 py-1 rounded-md"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleEditClick}
                            className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-800"
                        >
                            <GoPencil />

                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-2 py-1 bg-blue-500 text-white rounded-md border border-blue-800 hover:bg-blue-800"
                        >
                            <MdDelete />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
