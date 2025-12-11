import { ScrollText } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  const handleHomeClick = () => {
    navigate("/")
  }

  return (
    <>
      <div className="mx-auto pl-8 md:pl-0 w-7/10 md:w-2/3 max-w-150">
        <div className="flex justify-between text-indigo-900 mt-5">
          <div
            className="font-title text-2xl flex cursor-pointer"
            onClick={handleHomeClick}
          >
            <ScrollText strokeWidth={1.6} className="mt-1 mr-2" />
            <div className="">TodoBoard</div>
          </div>

          <a
            target="_blank"
            href="https://github.com/eufemia23/TodoBoard"
            className="hover:bg-white/30 hover:cursor-pointer transition duration-300 ease-smooth px-[5px] rounded-full hover:scale-110"
          >
            <VscGithubAlt className="mt-1.5 size-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
