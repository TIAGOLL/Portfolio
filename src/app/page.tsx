'use client'
import Header from "@/components/Header";
import UsedTechs from "@/components/UsedTechs";
import Footer from "@/components/Footer";
import IfLoading from '@/components/IfLoading/index';
import RepositoryCard from '@/components/RepositoryCard/index';
import { RepoProps } from "@/types/repoProps";
import { GitHubApi } from "@/api/GitHub";

import Image from "next/image";
import { Suspense, useEffect, useState } from 'react'



export default function Home() {

  const [data, setData] = useState<RepoProps[] | []>(Array)

  useEffect(() => {
    GitHubApi()
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      {/* MOBILE */}
      <body className='w-full items-center justify-center flex'>
        <Header />
        <div className='pb-20 p-2 w-full flex bg-secondary flex-col items-center justify-center mb-10 lg:hidden'>

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
          <div className="items-center flex justify-center w-11/12 lg:w-10/12 h-full space-x-2">
            <div className="w-full justify-center h-full lg:p-5 rounded-2xl bg-violet-400 flex flex-col items-center">

              <div className="w-full flex text-xl text-center items-center justify-center p-4 mb-5 text-zinc-700 font-bold lg:text-2xl lg:text-left">
                <h1>Meus melhores projetos:</h1>
              </div>


              <div className="flex-col flex justify-center items-center pb-3 space-y-6 lg:space-y-0 lg:flex-wrap lg:flex-row">
                <Suspense fallback={<IfLoading />}>
                  {data.map((repo: RepoProps) => (
                    <RepositoryCard key={repo.name} {...repo} />
                  ))}
                </Suspense>
              </div>

            </div>

          </div>
        </section>

        <Footer />
      </body>

    </>
  )
}