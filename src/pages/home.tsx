import { useMemo, useState } from "react";
import { users } from "../constants/constant";

type FilterValues = "all" | "active" | "inactive";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterValues>("all");

  const filteredValue = useMemo(() => {
    let filteredUsers = users.filter((user) =>
      filter === "all" ? user : user.status === filter,
    );

    if (!search) return filteredUsers;

    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );

    return filteredUsers;
  }, [search, filter]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-2xl bg-white rounded-2xl shadow-2xl p-4">
        <p>Search Users</p>
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={search}
                className="p-1 border border-black rounded-lg focus:ring-blue-500"
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className="rounded-full p-2 px-3 bg-gray-50"
                  onClick={() => setSearch("")}
                >
                  X
                </button>
              )}
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as FilterValues)}
              className="p-1 rounded-lg border focus:ring-blue-500"
            >
              <option value={"all"}>All</option>
              <option value={"active"}>Active</option>
              <option value={"inactive"}>Inactive</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 bg-gray-50 text-gray-500 py-1">
              <p>User Name</p>
              <p>User Status</p>
            </div>
            {filteredValue.length > 0 ? (
              filteredValue.map((user) => {
                return (
                  <div
                    className="grid grid-cols-2 border-b border-b-gray-200 last:border-b-0 py-1"
                    key={user.id}
                  >
                    <p>{user.name}</p>
                    <p>{user.status}</p>
                  </div>
                );
              })
            ) : (
              <div className="col-span-2 flex items-center justify-center">
                <p className="text-lg font-semibold">No Results Found!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
