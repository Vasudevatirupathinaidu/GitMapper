import { FaGithub } from "react-icons/fa";
import { IoMdUnlock } from "react-icons/io";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <section className="my-auto flex flex-col items-center justify-evenly border border-zinc-700 w-[440px] max-w-full h-[220px] max-h-fit px-1 mx-1 bg-zinc-900 rounded-md hover:bg-opacity-40 transition-all duration-300">
      <h2 className="font-bold text-xl">Create Account</h2>
      <button className="flex text-sm gap-x-2 justify-center items-center text-white bg-zinc-700 rounded-md w-fit px-10 py-2  hover:bg-opacity-70 transition-all duration-300">
        <FaGithub size={20} color="#FEEDDE" />
        Sign up with GitHub
      </button>
      <p className="text-zinc-300 text-sm flex justify-center items-center gap-x-1">
        <span className="inline">
          <IoMdUnlock />
        </span>
        By signing up, you will unlock all the features of the app.
      </p>
      <p className="text-sm text-zinc-500">
        Already have an account?{" "}
        <Link to="/login" className="text-sm text-slate-400 font-bold">
          Login
        </Link>
      </p>
    </section>
  );
}

export default SignUpPage;
