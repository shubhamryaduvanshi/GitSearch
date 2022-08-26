import { userInfo } from "../services/AppCommonStore";
import { FaSolidUserAlt } from "solid-icons/fa";
import { ImLocation2 } from "solid-icons/im";
import { SiFiles } from "solid-icons/si";
export const UserInfo = () => {
  return (
    <div class="bg-white flex w-full flex-col items-center p-6 justify-around rounded-md mb-4 shadow-md sm:flex-row">
      <div class="p-2 bg-slate-300 rounded-full w-40 my-2">
        <img src={userInfo().avatar_url} class="h-36 w-36 rounded-full" />
      </div>
      <div class="flex flex-col w-auto sm:w-60 justify-center text-center sm:text-justify items-center sm:items-start">
        <div class="flex items-center text-xl text-blue-500 font-semibold">
          <a href={userInfo().html_url} target="_blank">
            @{userInfo().login}
          </a>
        </div>
        {userInfo().name && (
        <div class="flex items-center font-medium">
          <FaSolidUserAlt class="mr-2" /> {userInfo().name}
        </div>
        )}
        {userInfo().location && (
          <div class="flex items-center">
            <ImLocation2 class="mr-2" /> {userInfo().location}
          </div>
        )}

        <div class="flex my-4">
          <div class="flex items-center flex-col text-xs w-20 border border-blue-400 shadow-sm px-1 mx-1">
            {userInfo().public_repos}
            <span>REPOSITORY</span>
          </div>
          <div class="flex items-center flex-col text-xs w-20 border border-blue-400 shadow-sm px-1 mx-1">
            {userInfo().following}
            <span>FOLLOWING</span>
          </div>
          <div class="flex items-center flex-col text-xs w-20 border border-blue-400 shadow-sm px-1 mx-1">
            {userInfo().followers}
            <span>FOLLOWER</span>
          </div>
        </div>
      </div>

      {/* user name  */}
    </div>
  );
};
