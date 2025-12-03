import { ScrollText } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around text-indigo-900 mt-5">
        <div className="font-title text-2xl flex">
          <ScrollText strokeWidth={1.6} className="mt-1 mr-2" />
          <div className="">TodoBoard</div>
        </div>

        <div className="hover:bg-white/30 hover:cursor-pointer transition duration-300 ease-smooth px-1 rounded-full hover:scale-110">
          <VscGithubAlt className="mt-1.5 size-5.5" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
