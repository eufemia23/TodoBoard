import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../lib/axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayEmptyFieldWarning, setDisplayEmptyFieldWarning] =
    useState(false);
  const [displayPasswordWarning, setDisplayPasswordWarning] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim() || !email.trim() || !password.trim()) {
      setDisplayEmptyFieldWarning(true);
      return;
    }
    if (password.length <= 8) {
      setDisplayPasswordWarning(true);
      return;
    }
    setIsLoading(true);
    try {
      await api.post("/users/register", { username, email, password });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      navigate("/tasks");
    }
  };

  const handleSwitchClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <div className="bg-white w-9/10 md:w-2/3 max-w-150 min-h-120 rounded-lg shadow-lg px-10 py-5">
          <div className="text-[20px] mb-5 font-title">Register</div>
          <form onSubmit={handleSubmit} className="text-[15px] font-default">
            <input
              className="px-4 border border-gray-200 shadow-xs rounded-lg w-9/10 md:w-4/5 h-10 block mx-auto mt-5"
              value={username}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              maxLength={16}
            ></input>

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

            {displayPasswordWarning && (
              <div className="text-[15px] font-default mx-auto mt-5 flex w-9/10 md:w-4/5 text-red-700 justify-center">
                Passwords should be at least 8 characters long.
              </div>
            )}

            <button
              className="mx-auto mt-5 flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth py-2 w-9/10 md:w-4/5 rounded-lg hover:scale-103 bg-gray-200 justify-center"
              type="submit"
            >
              {isLoading ? (
                <div className="flex">Loading...</div>
              ) : (
                <div className="flex">Register</div>
              )}
            </button>
          </form>
          <button
            className="text-[15px] font-default mx-auto mt-5 flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth py-2 w-9/10 md:w-4/5 rounded-lg hover:scale-103 bg-gray-200 justify-center"
            onClick={handleSwitchClick}
          >
            <div className="flex ">Already have an account?</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
