import Repo from "./Repo";

function Repos({ userRepos }) {
  return (
    <section className="flex flex-col gap-2 w-full xl:w-[65%] max-h-full p-2 border rounded border-zinc-700  overflow-y-scroll">
      {userRepos.map((userRepo) => (
        <Repo key={userRepo.id} userRepo={userRepo} />
      ))}
      {userRepos.length === 0 && (
        <p className="flex m-auto justify-center items-center text-amber-400 font-bold text-xl">
          No repos found!
        </p>
      )}
    </section>
  );
}

export default Repos;
