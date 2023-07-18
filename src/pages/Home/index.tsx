'use client'
import Header from "@/components/Header";
import UsedTechs from "@/components/UsedTechs";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RepoProps } from '@/types/repo';
import RepositoryCard from "@/components/RepositoryCard";


export default function Home() {

    const [loading, setLoading] = useState(true)
    const [repos, setRepos] = useState<RepoProps[] | []>(Array);

    const fetchAllData = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://api.github.com/users/TIAGOLL/repos')
            const data = await response.json()
            if (!data) {
                throw 'Data está vazio'
            }

            let orderedRepos = data.sort(
                (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
            );

            orderedRepos = orderedRepos.slice(0, 4);

            setRepos(orderedRepos);

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchAllData()
    }, [])


    return (
        <>
            <Header />

            {/* MOBILE */}
            <body className='w-full items-center justify-center flex'>
                <div className='pb-20 w-full flex bg-secondary pt- flex-col items-center justify-center bg-gradient-to-t from-1% from-[#DCCEF2] via-10% via-[#AB89E1] lg:hidden'>

                    <div className="w-48 items-center justify-center flex pt-5 lg:w-4/12">
                        <Image className='shadow-link rounded-full border-zinc-600 border-2'
                            src={'images/myphoto.png'}
                            alt="Minha foto"
                            width={500}
                            height={0} />
                    </div>

                    <div className='text-center justify-center flex flex-col space-y-2'>
                        <h1 className='font-bold font-[Montserrat] text-2xl text-tittle'>Estudante e entusiasta da programação</h1>
                        <p className='text-description font-semibold text-md'>Hoje estou focando em dominar o Next.js, um framework que me está me levando para o full-stack!</p>
                        <UsedTechs />
                    </div>


                </div>


                {/* PC */}
                <div className='w-full bg-secondary lg:flex hidden mb-10'>
                    <div className='w-8/12 text-center justify-start items-center pt-28 flex flex-col space-y-10'>
                        <h1 className='font-bold font-[Montserrat] text-5xl text-tittle'>Estudante e entusiasta da programação</h1>
                        <p className='text-description font-semibold'>Hoje estou focando em dominar o Next.js, um framework que me está me levando para o full-stack!</p>
                        <UsedTechs />
                    </div>

                    <div className="w-4/12 items-center justify-center flex">
                        <Image className='shadow-link rounded-full border-zinc-600 border-2'
                            src={'images/myphoto.png'}
                            alt="Minha foto"
                            width={500}
                            height={0} />
                    </div>
                </div>

                <section className="flex w-full justify-center items-center">
                    <div className="items-center flex justify-center w-10/12 h-full space-x-2">
                        <div className="w-full justify-center flex flex-col h-full p-5 rounded-2xl bg-violet-400">
                            <div className="flex flex-col w-full items-center">
                                <div className="w-full flex flex-row text-left text-zinc-700 font-bold text-2xl">
                                    <h1>Meus melhores projetos:</h1>
                                </div>
                                {loading &&
                                    <p>Carregando</p>
                                }

                                <div className="pt-6 flex flex-wrap w-full justify-center items-center">
                                    {
                                        repos.map((repo: RepoProps) => (
                                            <RepositoryCard key={repo.name} {...repo} />
                                        ))
                                    }
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </body>
        </>
    )
}
