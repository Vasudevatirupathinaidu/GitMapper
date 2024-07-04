import { useState } from "react";
import toast from "react-hot-toast";
import { GoSearch } from "react-icons/go";
import Spinner from "../components/Spinner";
import Repo from "../components/Repo";

function ExplorePage() {
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const exploreRepos = async (language) => {
    setIsLoading(true);
    setRepos([]);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=20`,
        {
          headers: {
            authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setRepos(data.items);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center mt-24">
      <form
        className="relative flex items-center justify-center mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          exploreRepos(language);
        }}
      >
        <label htmlFor="explore"></label>
        <div className="w-full flex gap-x-2">
          <div className="absolute top-3 left-2 flex items-center">
            <GoSearch className="w-5 h-5" />
          </div>
          <input
            type="search"
            id="explore"
            className="px-8 py-2 border rounded border-zinc-700 block w-full sm:w-[30vw] bg-zinc-900 outline-zinc-600 focus:bg-zinc-900 focus:border-zinc-700"
            placeholder="enter language"
            autoComplete="off"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-3 border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300"
          >
            Explore
          </button>
        </div>
      </form>
      {repos.length > 0 && (
        <p className="text-center mb-8 mt-4">
          <span className="bg-amber-50 px-5 py-3 mr-2 text-zinc-900 rounded-lg font-bold text-lg">
            {language.toUpperCase()}
          </span>
        </p>
      )}
      {!isLoading && repos.length > 0 && (
        <section className="flex flex-col gap-2 w-full xl:w-[85%] max-h-full p-2 border rounded border-zinc-700 overflow-y-scroll">
          {repos.map((repo) => (
            <Repo key={repo.id} userRepo={repo} />
          ))}
        </section>
      )}
      {!isLoading && repos.length === 0 && (
        <p className="flex m-auto pb-8 justify-center items-center text-amber-400 font-bold text-xl">
          No repos found!
        </p>
      )}
      {isLoading && <Spinner />}
    </section>
  );
}

export default ExplorePage;
