export const RepoListItem = ({ repo }: any) => {
  return (
    <>
      <div
        class="p-4 border-1.5 border-sky-500 my-2 rounded-md bg-white"
        style={"box-shadow: 0 0 5px gainsboro;"}
      >
        <div class="flex justify-between items-center">

          <div class="flex flex-col">
            <h3 class="text-lg font-medium">{repo.name}</h3>
            {repo.description && (
              <p class="text-xs text-gray-700 font-semibold py-1">Description- <span class="text-gray-600 font-thin">{repo.description}</span></p>
            )}
            <div>
              <a href={repo.html_url} class="text-xs text-blue-500" target="_blank">
                Click here to visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
