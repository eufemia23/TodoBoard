import { Checkbox } from "@heroui/react";
import { useState } from "react";
import { LiaTrashAlt } from "react-icons/lia";
import { SquarePen } from "lucide-react";
import { Trash } from "lucide-react";

const Task = ({task}) => {
  const [isTaskDone, setIsTaskDone] = useState(true);

  return (
    <div>
      <div className="flex gap-3 border border-gray-200 rounded-lg text-[15px] font-default font-light px-3 py-2 justify-between mb-3 shadow-xs hover:scale-103 hover:cursor-pointer transition duration-200 ease-smooth">
        <div className="flex">
          <Checkbox className="max-w-3 ">
            <Checkbox.Control className="border border-gray-300  data-[selected=true]:bg-blue-600 rounded-md size-5">
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox>

          <div className="pl-5">{task}</div>
        </div>

        <div className="flex items-baseline">
          <button>
            <SquarePen
              strokeWidth={1.5}
              className="size-4 hover:cursor-pointer text-gray-400 hover:text-indigo-900 transition duration-300 ease-smooth hover:scale-110 "
            />
          </button>
          <button>
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
