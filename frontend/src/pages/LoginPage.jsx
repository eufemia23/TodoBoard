import { useState } from "react"
import { useNavigate } from "react-router"
import api from "../lib/axios"

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [displayEmptyFieldWarning, setDisplayEmptyFieldWarning] = useState(false);
  const [displayIncorrectWarning, setDisplayIncorrectWarning] = useState(false);



const handleSubmit = async (e) => {
  e.preventDefault();
  if (!email.trim() || !password.trim()) {
    setDisplayEmptyFieldWarning(true);
    return;
  }
  setIsLoading(true);
  try {
    const response = await api.post("/users/login", { email, password });
    const { accessToken, userId } = response.data;
    
    // Store the token for future requests
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userId", userId);
    
    console.log("logged in successfully") 
    
    // Navigate to the user's tasks page
    navigate(`/tasks/${userId}`);
    
  } catch (error) {
    setDisplayIncorrectWarning(true)
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};



  const handleSwitchClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <div className="bg-white w-9/10 md:w-2/3 max-w-150 min-h-120 rounded-lg shadow-lg px-10 py-5">
          <div className="text-[20px] mb-5 font-title">Login</div>

          <form onSubmit={handleSubmit} className="text-[15px] font-default">
            <input
              className="px-4 border border-gray-200 shadow-xs rounded-lg w-9/10 md:w-4/5 h-10 block mx-auto mt-5"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              className="px-4 border border-gray-200 shadow-xs rounded-lg w-9/10 md:w-4/5 h-10 block mx-auto mt-5"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            {displayEmptyFieldWarning && (
              <div className="text-[15px] font-default mx-auto mt-5 flex w-9/10 md:w-4/5 text-red-700 justify-center">
                Please fill out all fields.
              </div>
            )}

            {displayIncorrectWarning && (
              <div className="text-[15px] font-default mx-auto mt-5 flex w-9/10 md:w-4/5 text-red-700 justify-center">
                Email or password are incorrect.
              </div>
            )}

            <button
              className="mx-auto mt-5 flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth py-2 w-9/10 md:w-4/5 rounded-lg hover:scale-103 bg-gray-200 justify-center"
              type="submit"
            >
              {isLoading ? (
                <div className="flex">Loading...</div>
              ) : (
                <div className="flex">Login</div>
              )}
            </button>
          </form>

          <button
            className="text-[15px] font-default mx-auto mt-5 flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth py-2 w-9/10 md:w-4/5 rounded-lg hover:scale-103 bg-gray-200 justify-center"
            onClick={handleSwitchClick}
          >
            <div className="flex ">Don't have an account?</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage