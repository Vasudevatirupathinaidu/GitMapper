function SortRepos({ onSort, sortType }) {
  const btns = [
    { type: "recent", text: "Most Recent" },
    { type: "stars", text: "Most Stars" },
    { type: "forks", text: "Most Forks" },
  ];

  return (
    <div className="flex justify-center lg:justify-end gap-2 mt-4 text-sm">
      {btns.map((btn) => (
        <button
          key={btn.type}
          onClick={() => onSort(btn.type)}
          className={`px-3 py-2 border rounded transition-all duration-300 ${
            sortType === btn.type ? "border-green-400" : "border-zinc-600"
          } bg-zinc-900 hover:border-zinc-300`}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default SortRepos;
