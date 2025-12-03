import { Checkbox, Label } from "@heroui/react";
import Task from "../components/Task";

const TasksPage = () => {
  

  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-white w-2/3 max-w-150 min-h-150 rounded-lg shadow-lg px-10 py-5">
        <div className="text-[20px] mb-5 font-title">My Tasks</div>

        <div>
          <Task task={"read the first page of the book"} />
          <Task task={"write an essay about the effect of painful on one's mental health and decide which stand i wanna take: is it good or bad?"} />
          <Task task={"hello"}/>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
