import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import Logout from "./Logout";

function Navbar() {
  const authUser = true;

  return (
    <nav className="absolute top-0 left-auto right-auto border-zinc-700 border bg-zinc-950 sm:w-1/5 w-[90%] max-w-full mt-4 py-3 px-2 rounded-md flex justify-evenly items-center">
      <Link
        to="/"
        className="flex justify-center hover:scale-125 transition-all duration-300"
      >
        <IoHome size={22} color="#05B6D3" />
      </Link>

      {!authUser && (
        <Link
          to="/likes"
          className="flex justify-center hover:scale-125 transition-all duration-300"
        >
          <BiSolidLike size={22} color="#34D399" />
        </Link>
      )}

      {authUser && (
        <Link
          to="/explore"
          className="flex justify-center hover:scale-125 transition-all duration-300"
        >
          <MdExplore size={24} color="#8569CF" />
        </Link>
      )}

      {!authUser && (
        <Link
          to="/login"
          className="flex justify-center hover:scale-125 transition-all duration-300"
        >
          <TbLogin2 size={24} color="#11B981" />
        </Link>
      )}

      {!authUser && (
        <Link
          to="/signup"
          className="flex justify-center hover:scale-125 transition-all duration-300"
        >
          <MdEditDocument size={22} color="#EAB305" />
        </Link>
      )}

      {!authUser && (
        <div className="flex justify-center cursor-pointer hover:scale-125 transition-all duration-300">
          <Logout />
        </div>
      )}

      <a
        href="https://github.com/Vasudevatirupathinaidu/GitMapper"
        className="flex justify-center hover:scale-125 transition-all duration-300"
        target="_blank"
      >
        <FaGithub size={22} color="#FFF" />
      </a>
    </nav>
  );
}

export default Navbar;
