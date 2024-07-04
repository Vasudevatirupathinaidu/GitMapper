import { FaRegStar } from "react-icons/fa6";
import { BiGitRepoForked } from "react-icons/bi";
import { FaCopy } from "react-icons/fa6";

import { formatDate } from "../utils/utilFunction";
import { LANGUAGES } from "../utils/constants";
import toast from "react-hot-toast";

function Repo({ userRepo }) {
  const handleCloneClick = async (repo) => {
    try {
      await navigator.clipboard.writeText(repo.clone_url);
      toast.success("Repo URL copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy repo URL to clipboard");
    }
  };

  return (
    <div className="border border-zinc-700 bg-zinc-900 rounded p-2">
      <div className="flex flex-col sm:flex-row sm:items-center text-sm gap-x-2">
        <a href={userRepo?.html_url} target="_blank" rel="noreferrer">
          <p>{userRepo?.name}</p>
        </a>
        <div className="flex gap-x-2">
          <button className="flex items-center text-xs gap-1 my-1 px-2 py-1 bg-orange-300 text-neutral-900 rounded-full transition-all hover:bg-opacity-80 duration-300">
            <FaRegStar size={10} /> {userRepo?.stargazers_count}
          </button>
          <button className="flex items-center text-xs gap-1 my-1 px-2 py-1 bg-violet-300 text-neutral-900 rounded-full transition-all hover:bg-opacity-80 duration-300">
            <BiGitRepoForked size={10} /> {userRepo?.forks_count}
          </button>
          <button
            onClick={() => handleCloneClick(userRepo)}
            className="flex items-center text-xs gap-1 my-1 px-2 py-1 bg-teal-300 text-neutral-900 rounded-full transition-all hover:bg-opacity-80 duration-300"
          >
            <FaCopy size={12} /> Clone
          </button>
        </div>
      </div>
      <div>
        <p className="text-zinc-500 text-xs gap-1 my-1">
          Created on {formatDate(userRepo?.created_at)}
        </p>
        <p className="text-zinc-400 text-sm">
          {userRepo?.description
            ? `${userRepo?.description.slice(0, 100)}...`
            : "No description provided."}
        </p>
        {LANGUAGES[userRepo?.language?.toLowerCase()] ? (
          <img
            src={LANGUAGES[userRepo.language.toLowerCase()]}
            alt={userRepo?.language}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Repo;
