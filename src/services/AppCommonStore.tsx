import { createSignal } from "solid-js";

const [repoCollection, setRepoCollection] = createSignal([]);
const [userInfo, setUserInfo] = createSignal(
  {} || {
    avatar_url: "",
    bio: "",
    blog: "",
    company: "",
    email: "",
    location: "",
    login: "",
    name: "",
    public_gists: 0,
    public_repos: 0,
    updated_at: "",
    url: "",
    following: 0,
    followers: 0,
    hireable: "",
    html_url: "",
  }
);

// const getRepository = (userName: string) => {
//   getUserInfo(userName);
//   fetch(`https://api.github.com/users/${userName}/repos`)
//     .then((res) => res.json())
//     .then((data) => {
//       setRepoCollection(data);
//     })
//     .catch((err) => console.log(err));
// };


export { repoCollection, setRepoCollection, userInfo,setUserInfo };
