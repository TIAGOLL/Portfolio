'use client'

import MenuIcon from '@/icons/MenuIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLogo from '../NavLogo';
import MyHistory from './../../pages/myHistory/index';


const Header = () => {

    const [isVisible, setVisible] = useState(true)


    return (
        <>
            <header className="bg-secondary flex flex-row w-screen text-white p-1">

                <NavLogo />

                <div className='flex w-full items-center justify-end'>
                    <nav className="space-x-12 hidden flex-row items-center justify-center font-bold lg:flex pr-10">
                        <Link className='p-3 hover:animate-bounce hover:bg-[#5A2CA4] rounded-full pl-2 pr-2 hover:shadow-link' href={'/myhistory'} prefetch={false}>Minha história</Link>
                        <Link className='p-3 hover:animate-bounce hover:bg-[#5A2CA4] rounded-full pl-2 pr-2 hover:shadow-link' href={'/education'} prefetch={false}>Educação</Link>
                        <Link className='p-3 hover:animate-bounce hover:bg-[#5A2CA4] rounded-full pl-2 pr-2 hover:shadow-link' href={'/profissional'} prefetch={false}>Profissional</Link>
                    </nav>

                    {isVisible && (
                        <div className='justify-center items-center pr-2 lg:hidden'>
                            <button onClick={() => setVisible((prev) => !prev)}>
                                <MenuIcon width={22} strokeWidht='2.5' />
                            </button>
                        </div>)}

                    {!isVisible && (
                        <div className='justify-center items-center pr-2 lg:hidden'>
                            <button onClick={() => setVisible((prev) => !prev)} className='font-bold items-center justify-center text-xl' >
                                X
                            </button>
                        </div>)}


                    {!isVisible && (
                        <div className="w-full h-[calc(100vh-81px)] fixed top-14 left-0 bg-white">
                            <div className="flex flex-col items-stretch justify-center">
                                <button className='w-full p-4 border-b border-gray-100 flex items-start text-black'>
                                    <Link href={'/myhistory'}>Minha história</Link>
                                </button>
                                <button className='w-full p-4 border-b border-gray-100 flex items-start text-black'>
                                    <Link href={'/education'}>Estudos</Link>
                                </button>

                            </div>
                        </div>)}



                </div>



            </header>
        </>
    )
}

export default Header;