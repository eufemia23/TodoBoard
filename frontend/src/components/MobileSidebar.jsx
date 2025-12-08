import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  FolderClosed,
  House,
  LogOut,
  Menu,
  MessageCircleQuestionMark,
  Plus,
  Settings,
  ListCheck,
  ClipboardList,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import AddTodoModal from "../components/AddTodoModal"

const MobileSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddTodo = () => {
    setIsModalOpen(true);
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isModalOpen && (
        <AddTodoModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <div
        className={` fixed bg-white  shadow-sm shadow-gray-300   ${
          isExpanded
            ? "w-screen pl-3 pt-3.5  h-screen z-50 "
            : "mt-3.5 ml-3 rounded-full hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth hover:scale-110"
        }`}
      >
        <div
          onClick={handleExpandClick}
          className={`h-10 w-10 content-center ${
            isExpanded
              ? "bg-gray-200 rounded-full hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth hover:scale-110"
              : ""
          }`}
        >
          <Menu strokeWidth={1.3} className="mx-auto " />
        </div>

        <div>
          {isExpanded && (
            <div className="font-title animate-appear">
              <div>
                <Link to={"/"} onClick={handleExpandClick}>
                  <div className="border-b border-b-gray-200 px-1 py-2 mt-5">
                    <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <House strokeWidth={1.3} className="" />

                      <div className="w-24 pl-3 ">Home</div>
                    </div>
                  </div>
                </Link>

                <Link to={"/tasks"} onClick={handleExpandClick}>
                  <div className=" border-b border-b-gray-200 px-1 py-2">
                    <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <ClipboardList strokeWidth={1.3} className="" />

                      <div className="w-24 pl-3 ">Tasks</div>
                    </div>
                  </div>
                </Link>

                <div className="border-b border-b-gray-200 px-1 py-2 ">
                  <button
                    className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex"
                    onClick={handleAddTodo}
                  >
                    <Plus strokeWidth={1.3} className="" />

                    <div className="w-24 ">Add Task</div>
                  </button>
                </div>

                <Link to={"/folders"} onClick={handleExpandClick}>
                  <div className="border-b border-b-gray-200 px-1 py-2">
                    <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <FolderClosed strokeWidth={1.3} className="" />

                      <div className="w-24 pl-3">Folders</div>
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={"/folders"} onClick={handleExpandClick}>
                  <div className="border-b border-b-gray-200 px-1 py-2">
                    <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <CircleUserRound strokeWidth={1.3} className="" />
                      <div className="w-24 pl-3 ">Profile</div>
                    </div>
                  </div>
                </Link>

                <div className="border-b border-b-gray-200 px-1 py-2 ">
                  <button
                    className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex"
                    onClick={handleAddTodo}
                  >
                    <LogOut strokeWidth={1.3} className="" />

                    <div className="w-24 ">Log Out</div>
                  </button>
                </div>

                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
