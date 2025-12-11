import { useEffect, useState } from "react";
import api from "../lib/axios";
import { LoaderCircle } from "lucide-react";


const FoldersPage = () => {
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <div className="bg-white w-9/10 md:w-2/3 max-w-150 min-h-150 rounded-lg shadow-lg px-10 py-5">
          <div className="text-[20px] mb-5 font-title">My Folders</div>

          {isLoading ? (
            <div className="w-max mx-auto mt-7">
              <LoaderCircle className="animate-spin mx-auto w-max size-20 text-gray-300 mb-5" />
              <div className="text-lg font-default text-gray-400">
                Loading your profile...
              </div>
            </div>
          ) : (
            <div>
              <div className="flex w-max mx-auto mt-7">Nothing here yet...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoldersPage;
