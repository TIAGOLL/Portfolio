
// import LoadingIcon from '@/icons/LodingIcon';
// import { RepoProps } from '@/types/repo';
// import { useState } from 'react';

// const GitHubApi = async () => {


//     const [repos, setRepos] = useState<RepoProps[] | []>(Array);

//     try {
//         const response = await fetch('https://api.github.com/users/TIAGOLL/repos')
//         const data = await response.json()
//         if (!data) {
//             throw 'Data está vazio'
//         }

//         let orderedRepos = data.sort(
//             (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
//         );

//         orderedRepos = orderedRepos.slice(0, 4);

//         setRepos(orderedRepos);

//         return repos


//     } catch (error) {
//         console.log(error)
//     }
// }

// export default GitHubApi;