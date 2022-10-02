import { createSignal, Show } from "solid-js";

import { setRepoCollection, setUserInfo } from "../services/AppCommonStore";
import { ErrorDialog } from "./ErrorDialog";
import { Loader } from "./Loader";

export const SearchForm = () => {
  const [searchText, setSearchText] = createSignal("");
  const [error, setError] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const [errorMessage, setErrorMessage] = createSignal("");

  const handleSearch = (e: Event) => {
    e.preventDefault();
    setLoading(true);
    getUserInfo(searchText());
  };

  const getUserInfo = (userName: string) => {
    setLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setLoading(false);
          setErrorMessage("User not found.");
          setError(true);
          return;
        }
        setUserInfo(data);
        getRepositories(userName);
      })
      .catch((err) => {
        console.log("Error Occured", err);
        setErrorMessage("Something went wrong.");
        setError(true);
        setLoading(false);
      });
  };

  const getRepositories = (searchValue: string) => {
    fetch(`https://api.github.com/users/${searchValue}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepoCollection(data);
        if (data.length === 0) {
          setErrorMessage("No repositories found.");
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Show when={loading()}>
        <Loader />
      </Show>
      <Show when={error()}>
        <ErrorDialog
          message={errorMessage()}
          closeModal={() => setError(false)}
        />
      </Show>
      <Show when={!loading()}>
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
      </Show>
    </>
  );
};
