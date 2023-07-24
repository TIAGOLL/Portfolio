'use client'
import MenuIcon from '@/icons/MenuIcon';
import { useState } from 'react';
import NavLogo from '../NavLogo';
import NavLink from '../NavLink';



const Header = () => {

    const [isVisible, setVisible] = useState(true)

    return (
        <>
            <header className="bg-secondary flex flex-row w-full text-white pt-2 pl-5 pr-5 lg:pb-10">
                <NavLogo />
                <div className='flex w-full items-center justify-end'>
                    <nav className="space-x-12 hidden flex-row items-center justify-center font-bold lg:flex pr-10">
                        <NavLink href={'/myhistory'}>Minha história</NavLink>
                        <NavLink href={'/projects'}>Projetos</NavLink>
                        <NavLink href={'/education'}>Educação</NavLink>
                        <NavLink href={'/professional'}>Profissional</NavLink>
                    </nav>

                    {isVisible && (
                        <div className='justify-center items-center lg:hidden'>
                            <button onClick={() => setVisible((prev) => !prev)}>
                                <MenuIcon width={30} strokeWidht={'2.5'} />
                            </button>
                        </div>)}

                    {!isVisible && (
                        <div className='justify-center items-center lg:hidden'>
                            <button onClick={() => setVisible((prev) => !prev)} className='font-bold items-center justify-center text-xl pr-1' >
                                X
                            </button>
                        </div>)}


                    {!isVisible && (
                        <div className="w-full h-[calc(100vh-81px)] fixed top-14 left-0 bg-white">
                            <div className="flex flex-col items-stretch justify-center">
                                <NavLink href={'/myhistory'}>Minha história</NavLink>
                                <NavLink href={'/projects'}>Projetos</NavLink>
                                <NavLink href={'/education'}>Educação</NavLink>
                                <NavLink href={'/professional'}>Profissional</NavLink>
                            </div>
                        </div>)}
                </div>



            </header>
        </>
    )
}

export default Header;