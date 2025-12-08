import Task from "../components/Task";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs } from "@heroui/react";
import { PlusIcon } from "lucide-react";
import AddTodoModal from "../components/AddTodoModal";

const TasksPage = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

   const handleAddTodo = () => {
     setIsModalOpen(true);
   };


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/todos");
        setTodos(res.data);
      } catch (error) {
        console.log("Error fetching notes", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {isModalOpen && (
        <AddTodoModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <div className="flex justify-center mt-10 ">
        <div className="bg-white w-9/10 md:w-2/3 max-w-150 min-h-150 rounded-lg shadow-lg px-10 py-5 animate-appear">
          <div className="text-[20px] mb-5 font-title">My Tasks</div>

          <Tabs className="w-full max-w-130 font-default">
            <Tabs.ListContainer>
              <Tabs.List aria-label="Options">
                <Tabs.Tab id="overview">
                  To Do
                  <Tabs.Indicator />
                </Tabs.Tab>

                <Tabs.Tab id="reports">
                  Done
                  <Tabs.Indicator />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel className="pt-4" id="overview">
              <p>View your project overview and recent activity.</p>
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="analytics">
              <p>Track your metrics and analyze performance data.</p>
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="reports">
              <p>Generate and download detailed reports.</p>
            </Tabs.Panel>
          </Tabs>

          <div>
            {isLoading && <div>Loading notes...</div>}

            {todos.map((todo) => (
              <Task key={todo._id} task={todo.content} />
            ))}
          </div>

          <div className="flex w-max mx-auto mt-7">
            <button
              className="text-[15px] font-default flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth pt-2 pb-2 pr-5 pl-4 rounded-full hover:scale-110 bg-gray-200"
              onClick={handleAddTodo}
            >
              <PlusIcon
                absoluteStrokeWidth={true}
                strokeWidth={1.6}
                className="size-6 pr-2 -mt-px"
              />
              <div className="">Add Task</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
