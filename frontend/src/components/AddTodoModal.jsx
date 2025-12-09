import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import api from "../lib/axios";


const AddTodoModal = ({isModalOpen, setIsModalOpen, onClose}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isWarningDisplayed, setIsWarningDisplayed] = useState(false);

  const status = false;

  //finish this by adding folders that users can choose
  const folder = "first folder";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setIsWarningDisplayed(true);
      return;
    }
    setIsLoading(true);
    try {
      await api.post("/todos", { content, status, folder });
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-9999 mx-auto bg-black/20"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="bg-white w-8/10 md:w-1/2 max-w-130 min-h-110 rounded-lg shadow-lg mx-auto mt-37 relative pl-5">
            <button
              onClick={onClose}
              className="hover:bg-gray-200 hover:cursor-pointer transition duration-300 ease-smooth rounded-full hover:scale-110 absolute right-1 top-1"
            >
              <X strokeWidth={1.6} />
            </button>

            <form className="font-title pt-10 pr-5">
              <div className="">
                <label className="block text-xl mb-5 pl-6">
                  <span className="">Add a new task</span>
                </label>
                <textarea
                  placeholder="Write your task here..."
                  className="border border-gray-200 rounded-lg px-3 py-2 w-9/10 max-w-120 flex mx-auto font-default font-light shadow-md resize-none h-50"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  maxLength={200}
                />
                <div className="absolute right-11 mt-4">
                  {content.length}/200
                </div>
              </div>

              <div className="absolute left-11 mt-4 text-red-700">
                {isWarningDisplayed && "Please add your task"}
              </div>

              <div className="flex w-max mx-auto mt-20">
                <button
                  disabled={isLoading}
                  onClick={handleSubmit}
                  type="submit"
                  className="text-[15px] font-default flex hover:bg-indigo-800/30 hover:cursor-pointer transition duration-300 ease-smooth pt-2 pb-2 pr-5 pl-4 rounded-full hover:scale-110 bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:cursor-default disabled:hover:scale-100"
                >
                  {isLoading ? "Creating..." : "Create Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTodoModal