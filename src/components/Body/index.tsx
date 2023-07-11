'use client'

import SearchPath from '@/services/SearchPath';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Body = () => {

    const pathname = usePathname();

    return (
        <>
            <div className='w-screen items-center justify-center flex'>
                <div className='w-full flex bg-secondary pt-10'>
                    <div className='w-8/12 items-center justify-start pt-28 flex flex-col space-y-10'>
                        <h1 className='font-bold font-[Montserrat] text-5xl text-tittle'>Estudante e entusiasta da programação</h1>
                        <p className='text-description font-semibold'>Hoje estou focando em dominar o Next.js, um framework que me está me levando para o full-stack!</p>
                    </div>

                    <div className="w-4/12 items-center justify-center flex">
                        <Image className='shadow-link rounded-full border-zinc-600 border-2' src={`${pathname}myphoto.png`} alt="Minha foto" width={500} height={0} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;