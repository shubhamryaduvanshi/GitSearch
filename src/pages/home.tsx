import { createEffect } from "solid-js";
import { RepoList } from "../components/RepoList";
import { SearchForm } from "../components/searchForm";
import { repoCollection } from "../services/AppCommonStore";

export const Home = () => {
  createEffect(() => {
    console.log("Home", repoCollection());
  });
  return (
    <>
      <div class="max-w-2xl p-4 mx-auto">
        <h1 class="text-center text-xl">Search Git Repository</h1>
        {repoCollection().length > 0 ? <RepoList /> : <SearchForm />}
      </div>
    </>
  );
};
