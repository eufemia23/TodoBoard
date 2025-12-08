import { Checkbox } from "@heroui/react";
import { useState, useEffect } from "react";
import { SquarePen } from "lucide-react";
import { Trash } from "lucide-react";
import api from "../lib/axios";

const Task = ({todo, onTaskUpdate, onTaskDelete}) => {
  const [updatedTask, setUpdatedTask] = useState(todo);

  useEffect(() => {
    setUpdatedTask(todo);
  }, [todo]);

  const handleCheckboxClick = async () => {
    try {
      const newTask = { ...updatedTask, status: !updatedTask.status };
      setUpdatedTask(newTask);
      await api.put(`/todos/${todo._id}`, newTask);
      if (onTaskUpdate) {
        onTaskUpdate(newTask);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/todos/${todo._id}`);
      if (onTaskDelete) {
        onTaskDelete(todo);
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <div className="flex gap-3 border border-gray-200 rounded-lg text-[15px] font-default font-light px-3 py-2 justify-between mb-3 shadow-xs hover:scale-103 hover:cursor-pointer transition duration-200 ease-smooth">
        <div className="flex">
          {todo.status && (
            <Checkbox
              defaultSelected
              selected={updatedTask.status}
              onChange={handleCheckboxClick}
              className="max-w-3 "
            >
              <Checkbox.Control className="border border-gray-300  data-[selected=true]:bg-blue-600 rounded-md size-5">
                <Checkbox.Indicator />
              </Checkbox.Control>
            </Checkbox>
          )}

          {!todo.status && (
            <Checkbox
              selected={updatedTask.status}
              onChange={handleCheckboxClick}
              className="max-w-3 "
            >
              <Checkbox.Control className="border border-gray-300  data-[selected=true]:bg-blue-600 rounded-md size-5">
                <Checkbox.Indicator />
              </Checkbox.Control>
            </Checkbox>
          )}

          <div className="pl-5">{todo.content}</div>
        </div>

        <div className="flex items-baseline">
          <button>
            <SquarePen
              strokeWidth={1.5}
              className="size-4 hover:cursor-pointer text-gray-400 hover:text-indigo-900 transition duration-300 ease-smooth hover:scale-110 "
            />
          </button>
          <button onClick={handleDelete}>
            <Trash
              strokeWidth={1.5}
              className="size-4 hover:cursor-pointer text-gray-400 hover:text-indigo-900 transition duration-300 ease-smooth hover:scale-110 ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
