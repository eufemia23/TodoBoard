import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  FolderClosed,
  House,
  LogOut,
  Menu,
  ClipboardList,
  LogIn,
  UserPlus,
  UserRoundPlus,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const MobileSidebar = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
        setIsLoggedIn(true)
      } 
  });

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

  const handleLogOut = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("userId");
    setIsLoggedIn(false)
    navigate("/");
  }

  return (
    <div>
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
            <div className="font-title" onClick={handleExpandClick}>
              <div>
                <Link to={"/"}>
                  <div className="border-b border-b-gray-200 px-1 py-2 mt-5">
                    <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <House strokeWidth={1.3} className="" />

                      <div className="w-24 pl-3 ">Home</div>
                    </div>
                  </div>
                </Link>

                <Link to={"/tasks"} onClick={handleTasksClick}>
                  <div className=" border-b border-b-gray-200 px-1 py-2">
                    <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <ClipboardList strokeWidth={1.3} className="" />

                      <div className="w-24 pl-3 ">Tasks</div>
                    </div>
                  </div>
                </Link>

                <Link to={"/folders"}>
                  <div className="border-b border-b-gray-200 px-1 py-2">
                    <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <FolderClosed strokeWidth={1.3} className="" />

                      <div className="w-24 pl-3">Folders</div>
                    </div>
                  </div>
                </Link>
              </div>

              {isLoggedIn ? (
                <div>
                  <Link to={"/current"}>
                    <div className="border-b border-b-gray-200 px-1 py-2">
                      <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                        <CircleUserRound strokeWidth={1.3} className="" />
                        <div className="w-24 pl-3 ">Profile</div>
                      </div>
                    </div>
                  </Link>

                  <div className="border-b border-b-gray-200 px-1 py-2 " onClick={handleLogOut}>
                    <button className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                      <LogOut strokeWidth={1.3} className="" />

                      <div className="w-24 ">Log Out</div>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to={"/login"}>
                    <div className="border-b border-b-gray-200 px-1 py-2">
                      <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                        <LogIn strokeWidth={1.3} className="" />
                        <div className="w-24 pl-3 ">Log In</div>
                      </div>
                    </div>
                  </Link>

                  <Link to={"/register"}>
                    <div className="border-b border-b-gray-200 px-1 py-2">
                      <div className="hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 py-1 rounded-full hover:scale-110 inline-flex">
                        <UserRoundPlus strokeWidth={1.3} className="" />
                        <div className="w-24 pl-3 ">Sign Up</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
