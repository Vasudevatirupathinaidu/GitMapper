import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginPage() {

  return (
    <section className="my-auto flex flex-col items-center justify-evenly border border-zinc-700 w-[320px] max-w-full h-[180px] max-h-fit px-1 mx-1 bg-zinc-900 rounded-md hover:bg-opacity-40 transition-all duration-300">
      <h2 className="font-bold text-xl">Login to your account</h2>
      <button
        className="flex text-sm gap-x-2 justify-center items-center text-white bg-zinc-700 rounded-md w-fit px-10 py-2  hover:bg-opacity-70 transition-all duration-300"

      >
        <FaGithub size={20} color="#FEEDDE" />
        Login with GitHub
      </button>
      <p className="text-sm text-zinc-500">
        Do not have an account?{" "}
        <Link to="/signup" className="text-sm text-slate-400 font-bold">
          Sign Up
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
