import { useState } from "react";
import { GoSearch } from "react-icons/go";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  return (
    <form
      className="relative flex items-center justify-center"
      onSubmit={(e) => {
        onSearch(e, username);
        setUsername("");
      }}
    >
      <label htmlFor="search"></label>
      <div className="w-full flex gap-x-2">
        <div className="absolute top-3 left-2 flex items-center">
          <GoSearch className="w-5 h-5" />
        </div>
        <input
          type="search"
          id="search"
          className="px-8 py-2 border rounded border-zinc-700 block w-full sm:w-[30vw] bg-zinc-900 outline-zinc-600 focus:bg-zinc-900 focus:border-zinc-700"
          placeholder="enter username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-3 border rounded border-zinc-600 bg-zinc-900 hover:border-zinc-300 transition-all duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
