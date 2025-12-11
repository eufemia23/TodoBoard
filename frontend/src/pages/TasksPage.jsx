import Task from "../components/Task";
import { useEffect, useState } from "react";
import api from "../lib/axios";
import { Tabs } from "@heroui/react";
import { LoaderCircle, PlusIcon } from "lucide-react";
import AddTodoModal from "../components/AddTodoModal";
import { useParams } from "react-router";

const TasksPage = () => {
  const { userid } = useParams();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const handleAddTodo = () => {
    setIsModalOpen(true);
  };

  const handleTaskUpdate = (updatedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === updatedTask._id ? updatedTask : todo
      )
    );
  };

  const handleTaskDelete = async (deletedTodo) => {
    setTodos((prev) => prev.filter((t) => t._id !== deletedTodo._id));
    try {
      const res = await api.get(`/todos/${userid}`);
      setTodos(res.data);
    } catch (err) {
      console.error("Error refetching todos after delete", err);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.get(`/todos/${userid}`);
        setTodos(res.data);
      } catch (error) {
        console.log("Error fetching notes", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [userid, isModalOpen]);

  return (
    <div>
      {isModalOpen && (
        <AddTodoModal
          setIsModalOpen
          isModalOpen
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <div className="flex justify-center mt-10 ">
        <div className="bg-white w-9/10 md:w-2/3 max-w-150 min-h-150 rounded-lg shadow-lg px-10 py-5">
          <div className="text-[20px] mb-5 font-title">My Tasks</div>

          <Tabs className="w-full max-w-130 font-default">
            <Tabs.ListContainer>
              <Tabs.List aria-label="Options">
                <Tabs.Tab id="todo">
                  To Do
                  <Tabs.Indicator />
                </Tabs.Tab>

                <Tabs.Tab id="done">
                  Done
                  <Tabs.Indicator />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel className="pt-4" id="todo">
              <div>
                {isLoading && (
                  <div className="w-max mx-auto mt-7">
                    <LoaderCircle className="animate-spin mx-auto w-max size-20 text-gray-300 mb-5" />
                    <div className="text-lg font-default text-gray-400">
                      Loading your tasks...
                    </div>
                  </div>
                )}

                {todos.map(
                  (todo) =>
                    !todo.status && (
                      <Task
                        key={todo._id}
                        todo={todo}
                        onTaskUpdate={handleTaskUpdate}
                        onTaskDelete={handleTaskDelete}
                      />
                    )
                )}
              </div>
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="done">
              <div>
                {isLoading && (
                  <div className="w-max mx-auto mt-7">
                    <LoaderCircle className="animate-spin mx-auto w-max size-20 text-gray-300 mb-5" />
                    <div className="text-lg font-default text-gray-400">
                      Loading your tasks...
                    </div>
                  </div>
                )}

                {todos.map(
                  (todo) =>
                    todo.status && (
                      <Task
                        key={todo._id}
                        todo={todo}
                        onTaskUpdate={handleTaskUpdate}
                        onTaskDelete={handleTaskDelete}
                      />
                    )
                )}
              </div>
            </Tabs.Panel>
          </Tabs>

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
