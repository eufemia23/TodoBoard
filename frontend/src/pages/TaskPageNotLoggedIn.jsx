import { useNavigate } from "react-router";


const TasksPageNotLoggedIn = () => {
  //just demo; if not logged in, todos should be getting saved in localstorage



  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };


  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <div className="bg-white w-9/10 md:w-2/3 max-w-150 min-h-150 rounded-lg shadow-lg px-10 py-5">
          <div className="text-[20px] mb-5 font-title">My Tasks</div>

          <div className="text-[15px] font-default mx-auto h-70 mt-5 flex py-2 w-9/10 md:w-4/5 rounded-lg bg-gray-100 justify-center items-center">
            <div>Please sign up to create tasks</div>
          </div>

          <button
            className="text-[15px] font-default mx-auto mt-5 flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth py-2 w-9/10 md:w-4/5 rounded-lg hover:scale-103 bg-gray-200 justify-center"
            onClick={handleRegisterClick}
          >
            <div className="flex ">Sign up here!</div>
          </button>
          <button
            className="text-[15px] font-default mx-auto mt-5 flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth py-2 w-9/10 md:w-4/5 rounded-lg hover:scale-103 bg-gray-200 justify-center"
            onClick={handleLoginClick}
          >
            <div className="flex ">Already have an account?</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksPageNotLoggedIn;
