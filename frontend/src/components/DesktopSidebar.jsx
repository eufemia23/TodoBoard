import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  FolderClosed,
  House,
  LogOut,
  ClipboardList,
  LogIn,
  UserRoundPlus,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTasksClick = async (e) => {
    e.preventDefault();
    try {
      if (localStorage.getItem("accessToken")) {
        const userId = localStorage.getItem("userId");
        navigate(`/tasks/${userId}`);
        console.log(userId); //delete
      } else {
        navigate("/tasks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className={`fixed bg-white min-h-screen  rounded-lg shadow-lg shadow-gray-300 pt-3 font-title flex flex-col justify-between transition-[width] duration-300 ease-in-out ${
          isExpanded ? "w-40 lg:w-50" : "w-14"
        }`}
      >
        <div>
          <div className="relative">
            <button
              className="hover:cursor-pointer transition duration-300 ease-smooth hover:scale-110 rounded-md absolute -top-2 -right-3 border border-gray-300 bg-white shadow-md text-gray-400 hover:text-indigo-900"
              onClick={handleExpandClick}
            >
              {isExpanded ? (
                <ChevronLeft strokeWidth={1.3} />
              ) : (
                <ChevronRight strokeWidth={1.3} />
              )}
            </button>
          </div>

          <Link to={"/"}>
            <div className="border-b border-b-gray-200 px-3 py-2">
              <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                <House strokeWidth={1.3} className="" />
                {isExpanded && (
                  <div className="w-24 pl-3 animate-appear">Home</div>
                )}
              </div>
            </div>
          </Link>

          <Link to={"/tasks"} onClick={handleTasksClick}>
            <div className=" border-b border-b-gray-200 px-3 py-2">
              <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                <ClipboardList strokeWidth={1.3} className="" />
                {isExpanded && (
                  <div className="w-24 pl-3 animate-appear">Tasks</div>
                )}
              </div>
            </div>
          </Link>

          <Link to={"/folders"}>
            <div className="border-b border-b-gray-200 px-3 py-2">
              <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                <FolderClosed strokeWidth={1.3} className="" />
                {isExpanded && (
                  <div className="w-24 pl-3 animate-appear">Folders</div>
                )}
              </div>
            </div>
          </Link>
        </div>

        {isLoggedIn ? (
          <div>
            <Link to={"/current"}>
              <div className="border-b border-b-gray-200 border-t border-t-gray-200 px-3 py-2">
                <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                  <CircleUserRound strokeWidth={1.3} className="" />
                  {isExpanded && (
                    <div className="w-24 pl-3 animate-appear">Profile</div>
                  )}
                </div>
              </div>
            </Link>

            <div className=" px-3 py-2 ">
              <button className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                <LogOut strokeWidth={1.3} className="" />
                {isExpanded && (
                  <div className="w-25 -ml-1 animate-appear">Log Out</div>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
              <div className="border-b border-b-gray-200 border-t border-t-gray-200 px-3 py-2">
                <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                  <LogIn strokeWidth={1.3} className="" />
                  {isExpanded && (
                    <div className="w-24 pl-3 animate-appear">Log In</div>
                  )}
                </div>
              </div>
            </Link>

            <Link to={"/register"}>
              <div className=" px-3 py-2 ">
                <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                  <UserRoundPlus strokeWidth={1.3} className="" />
                  {isExpanded && (
                    <div className="w-24 pl-3 animate-appear">Sign Up</div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
