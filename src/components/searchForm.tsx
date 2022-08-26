import { createSignal } from "solid-js";

import { getRepository} from "../services/AppCommonStore";

export const SearchForm = () => {
  const [searchText, setSearchText] = createSignal("");
  const handleSearch = (e: Event) => {
    e.preventDefault();
    getRepository(searchText());
  };
  return (
    <div class="bg-white max-w-xs m-auto py-4 mt-8 rounded-md shadow-md">
      <form
        onSubmit={(e) => handleSearch(e)}
        class="flex  items-center justify-center flex-col my-4"
      >
        <div class="flex flex-col">
          <label class="text-sm pl-1.5 pb-0.5">Enter Username</label>
          <input
            class="border border-1 border-gray-600 px-1 ml-2 focus:outline-none text-md py-0.5 rounded-sm"
            type="text"
            value={searchText()}
            onInput={(e) => setSearchText(e.currentTarget.value)}
            required
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 mt-3 text-sm text-white px-3 pb-2 pt-1.5 shadow-sm rounded-2xl disabled:bg-slate-300"
          disabled={!searchText()}
        >
          Search Now
        </button>
      </form>
    </div>
  );
};
