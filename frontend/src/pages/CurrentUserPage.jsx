import { useParams } from "react-router";
import api from "../lib/axios";
import { useEffect } from "react";
import { useState } from "react";
import { Loader, LoaderCircle } from "lucide-react";

const CurrentUserPage = () => {
  const { userid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/users/current/${userid}`);
        const user = res.data;
        setUsername(user.username);
        console.log(user);
      } catch (error) {
        console.log("Error fetching notes", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <div className="bg-white w-9/10 md:w-2/3 max-w-150 min-h-150 rounded-lg shadow-lg px-10 py-5">
          <div className="text-[20px] mb-5 font-title">My Profile</div>

          {isLoading ? (
            <div className="w-max mx-auto mt-7">
              <LoaderCircle className="animate-spin mx-auto w-max size-20 text-gray-300 mb-5" />
              <div className="text-lg font-default text-gray-400">Loading your profile...</div>
            </div>
          ) : (
            <div>
              <div className="flex w-max mx-auto mt-7">Welcome {username}!</div>

              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentUserPage;
