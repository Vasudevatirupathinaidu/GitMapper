import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";

import Spinner from "../components/Spinner";

function HomePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState("");

  const getUserData = useCallback(
    async (username = "Vasudevatirupathinaidu") => {
      setIsLoading(true);

      try {
        const userProfileResponse = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
          }
        );

        if (!userProfileResponse.ok) {
          throw new Error(
            `Error: ${userProfileResponse.status} ${userProfileResponse.statusText}`
          );
        }

        const userProfileData = await userProfileResponse.json();

        if (!userProfileData.repos_url) {
          throw new Error("Repos URL not found");
        }

        const userReposResponse = await fetch(userProfileData.repos_url, {
          headers: {
            authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
          },
        });

        if (!userReposResponse.ok) {
          throw new Error(
            `Error: ${userReposResponse.status} ${userReposResponse.statusText}`
          );
        }

        const userReposData = await userReposResponse.json();

        setUserProfile(userProfileData);
        setUserRepos(userReposData);

        return { userProfileData, userReposData };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleSearch = async (e, username) => {
    e.preventDefault();

    setUserProfile(null);
    setUserRepos([]);
    setIsLoading(true);

    const { userProfileData, userReposData } = await getUserData(username);
    setUserProfile(userProfileData);
    setUserRepos(userReposData);
    setIsLoading(false);
    setSortType("recent");
  };

  const handleSort = (type) => {
    switch (type) {
      case "recent":
        userRepos.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        break;
      case "stars":
        userRepos.sort(
          (a, b) => new Date(b.stargazers_count) - new Date(a.stargazers_count)
        );
        break;
      case "forks":
        userRepos.sort(
          (a, b) => new Date(b.forks_count) - new Date(a.forks_count)
        );
        break;
      default:
        break;
    }
    setSortType(type);
    setUserRepos([...userRepos]);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-5xl mt-24">
        <Search onSearch={handleSearch} />
        {userRepos.length > 0 && (
          <SortRepos onSort={handleSort} sortType={sortType} />
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-x-10 my-10 w-full xl:w-[70%] h-[70vh]">
        {userProfile && !isLoading && <ProfileInfo userProfile={userProfile} />}
        {!isLoading && <Repos userRepos={userRepos} />}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

export default HomePage;
