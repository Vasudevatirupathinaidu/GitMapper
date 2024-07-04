function LikesPage() {
  return (
    <section className="mt-24 w-1/2 max-w-full h-0 flex justify-center">
      <table className="text-sm text-left rtl:text-right text-zinc-400">
        <thead className="border border-zinc-700 text-xs text-zinc-300 uppercase bg-zinc-900">
          <tr>
            <th scope="col" className="px-6 py-3 text-gray-400">
              No
            </th>
            <th scope="col" className="px-6 py-3 text-gray-400">
              USERNAME
            </th>
            <th scope="col" className="px-6 py-3 text-gray-400">
              DATE
            </th>
            <th scope="col" className="px-6 py-3 text-gray-400">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-zinc-700 text-zinc-300 text-sm bg-zinc-900">
            <th scope="row" className="px-6 py-4 font-medium text-center">
              1
            </th>
            <td className="px-6 py-4">Carlsen</td>
            <td className="px-6 py-4">{new Date().toLocaleDateString()}</td>
            <td className="px-6 py-4">❤️ Liked your profile</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default LikesPage;
