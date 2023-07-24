import { RepoProps } from "@/types/repoProps";
import { useState } from "react";

export const GitHubApi = async () => {


    try {

        const response = await fetch('https://api.github.com/users/TIAGOLL/repos')
        const data = await response.json()

        if (!data) {
            throw 'Data está vazio'
        }

        let orderedRepos = data.sort((a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count);

        orderedRepos = orderedRepos.slice(0, 4);

        return orderedRepos

    } catch (error) {
        console.log(error)
    }

}