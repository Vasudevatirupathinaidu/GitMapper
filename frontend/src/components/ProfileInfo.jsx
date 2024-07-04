import { BiSolidLike } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";

import { formatDate } from "../utils/utilFunction";

function ProfileInfo({ userProfile }) {
  return (
    <section className="w-full xl:w-[35%] min-h-[180px] max-h-full p-2 mb-10 border rounded border-zinc-700 overflow-y-scroll">
      <div className="flex justify-evenly items-center flex-col sm:flex-row sm:justify-center gap-x-4">
        {/* User Avatar */}
        <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
          <img
            className="w-24 h-24 block object-cover cursor-pointer mr-1 mb-2 rounded-full"
            src={userProfile?.avatar_url}
            alt="JavaScript Logo"
          />
        </a>

        <div className="flex flex-col">
          {/* Like GitHub Profile */}
          <button className="flex items-center gap-x-1 w-36 px-2 py-2 text-sm border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300">
            <BiSolidLike size={18} color="#34D399" />
            <p>Like Profile</p>
          </button>

          {/* View on GitHub */}
          <button className="w-36 px-2 py-2 mt-1 text-sm border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300">
            <a
              className="flex items-center gap-x-1"
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineRemoveRedEye size={18} color="#34D399" />
              View on GitHub
            </a>
          </button>
        </div>
      </div>

      {/* User location, portifolio and twitter account */}
      <div className="ml-3">
        {userProfile?.location && (
          <p className="flex items-center gap-x-1 my-2 text-sm">
            <IoLocationSharp size={18} />
            {userProfile?.location}
          </p>
        )}
        {userProfile?.blog && (
          <p className="flex items-center gap-x-1 my-2 text-sm">
            <CgWebsite size={18} />
            <a href={userProfile?.blog} target="_blank" rel="noreferrer">
              {userProfile?.blog}
            </a>
          </p>
        )}
        {userProfile?.twitter_username && (
          <p className="flex items-center gap-x-1 my-2 text-sm">
            <FaXTwitter size={18} />
            <a
              href={`https://x.com/${userProfile?.twitter_username}`}
              target="_blank"
              rel="noreferrer"
            >
              {userProfile?.twitter_username}
            </a>
          </p>
        )}
      </div>

      {/* User name and Joined date */}
      <div className="mx-4 my-4">
        {userProfile?.name && (
          <p className="flex flex-col gap-x-1 my-2 text-sm">
            <span className="text-xs text-zinc-500 font-bold">Full Name</span>
            {userProfile?.name}
          </p>
        )}

        {userProfile?.bio && (
          <p className="flex flex-col gap-x-1 my-2 text-sm">
            <span className="text-xs text-zinc-500 font-bold">Bio</span>
            {userProfile?.bio}
          </p>
        )}

        {userProfile?.login && (
          <p className="flex flex-col gap-x-1 my-2 text-sm">
            <span className="text-xs text-zinc-500 font-bold">Username</span>
            {userProfile?.login}
          </p>
        )}

        {userProfile?.email && (
          <p className="flex flex-col gap-x-1 my-2 text-sm">
            <span className="text-xs text-zinc-500 font-bold">Email</span>
            {userProfile?.email}
          </p>
        )}

        {userProfile?.created_at && (
          <p className="flex flex-col gap-x-1 my-1 text-sm">
            <span className="text-xs text-zinc-500 font-bold">Joined On</span>
            <span>{formatDate(userProfile?.created_at)}</span>
          </p>
        )}
      </div>

      <div className="flex flex-wrap place-items-center gap-2 mt-2 ml-4">
        <button className="flex items-center gap-x-1 text-xs w-32 px-1 py-2 border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300">
          <IoPersonSharp size={12} color="#34D399" />
          Follower: {userProfile?.followers}
        </button>
        <button className="flex items-center gap-x-1 text-xs w-32 px-1 py-2 border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300">
          <IoPersonOutline size={12} color="#34D399" />
          Following: {userProfile?.following}
        </button>
        <button className="flex items-center gap-x-1 text-xs w-32 px-1 py-2 border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300">
          <FaAddressBook size={12} color="#34D399" />
          Public repos: {userProfile?.public_repos}
        </button>
        <button className="flex items-center gap-x-1 text-xs w-32 px-1 py-2 border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300">
          <FaRegAddressBook size={12} color="#34D399" />
          Public gists: {userProfile?.public_gists}
        </button>
      </div>
    </section>
  );
}

export default ProfileInfo;
