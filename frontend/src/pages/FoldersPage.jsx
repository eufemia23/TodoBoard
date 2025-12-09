import { useEffect, useState } from "react";
import api from "../lib/axios";


const FoldersPage = () => {
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  return (
    <div>
      <div className="min-h-screen">

        <div className="max-w-7xl mx-auto p-4 mt-6">
          {isLoading && (
            <div className="text-center text-primary py-10">
              Loading folders...
            </div>
          )}

          {folders.length === 0 && <div>No folders available</div>}

          {folders.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {folders.map((folder) => (
                <NoteCard key={folder._id} folder={folder} setFolders={setFolders} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoldersPage;
