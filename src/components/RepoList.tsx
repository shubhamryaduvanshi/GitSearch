import { For, Suspense } from "solid-js";
import { repoCollection, setRepoCollection } from "../services/AppCommonStore";
import { RepoListItem } from "./RepoListItem";
import { UserInfo } from "./userInfo";
import { BiArrowBack } from 'solid-icons/bi'
export const RepoList = () => {
  return (
    <>
      <button
        onClick={() => {
          setRepoCollection([]);
        }}
        class="flex items-center w-20 bg-slate-300 justify-around my-4 ml-1 py-1 px-2 rounded-sm shadow-sm"
      >
        <BiArrowBack />
        Back
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <UserInfo />
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 ">
          <For each={repoCollection()}>
            {(repo: any) => (
              <>
                <RepoListItem repo={repo} />
              </>
            )}
          </For>
        </div>
      </Suspense>
    </>
  );
};
