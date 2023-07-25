import Link from 'next/link';

import { BiSolidPhoneCall, BiMailSend, BiLogoInstagram, BiLogoLinkedin, BiLogoGithub, BiHome, BiBookBookmark } from 'react-icons/bi'
import { TbWriting } from 'react-icons/tb'
import { MdWorkOutline } from 'react-icons/md'

const Footer = () => {

    return (
        <footer className='flex flex-col items-center justify-center bg-secondary text-white gap-4 p-2 mt-10 text-md lg:text-lg lg:p-10'>
            <div className="flex">
                <Link className='hover:text-zinc-300' href={'/contact'} prefetch={false}>
                    <h1 className="font-semibold font-mono text-2xl animate-bounce">Vamos trabalhar juntos?</h1>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-10/12 gap-10 lg:flex-row">

                {/* contact */}
                <div className="flex flex-col rounded-lg border-2 border-zinc-500 p-2 pr-4 pl-4 shadow-lg gap-1 lg:w-4/12 lg:h-48">
                    <div className='w-full flex flex-col relative pb-2'>
                        <h1 className="font-semibold font-mono text-lg">Contato</h1>
                        <span className='border-b-4 border- w-1/12 absolute left-0 bottom-1 rounded-full'></span>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-2'>
                        <BiMailSend />
                        <Link target='_blank' className='hover:text-zinc-300' href={"mailto:tiagoepitanga10@gmail.com"} prefetch={false}> tiagoepitanga10@gmail.com</Link>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-2'>
                        <BiSolidPhoneCall />
                        <p>(42) 98406-6420</p>
                    </div>
                </div>

                {/* social links */}
                <div className="flex flex-col rounded-lg border-2 border-zinc-500 p-2 pr-4 pl-4 shadow-lg gap-1 lg:w-4/12 lg:h-48">
                    <div className='w-full flex flex-col relative pb-2'>
                        <h1 className="font-semibold text-lg">Redes socias</h1>
                        <span className='border-b-4 border- w-1/12 absolute left-0 bottom-1 rounded-full'></span>
                    </div>

                    <div className="flex flex-row justify-start items-center gap-2">
                        <BiLogoInstagram />
                        <Link target='_blank' className='hover:text-zinc-300' href={'https://www.instagram.com/tiagoemanueldelima/'} prefetch={false}>Instagram</Link>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                        <BiLogoLinkedin />
                        <Link target='_blank' className='hover:text-zinc-300' href={'https://www.linkedin.com/in/tiago-emanuel-de-lima/'} prefetch={false}>Linkedin</Link>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                        <BiLogoGithub />
                        <Link target='_blank' className='hover:text-zinc-300' href={'https://github.com/TIAGOLL'} prefetch={false}>GitHub</Link>
                    </div>
                </div>

                {/* page links */}
                <div className="flex flex-col rounded-lg border-2 border-zinc-500 p-2 pr-4 pl-4 shadow-lg gap-1 lg:w-4/12 lg:h-48">
                    <div className='w-full flex flex-col relative pb-2'>
                        <h1 className="font-semibold text-lg">Links</h1>
                        <span className='border-b-4 border- w-1/12 absolute left-0 bottom-1 rounded-full'></span>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                        <BiHome />
                        <Link target='_self' className='hover:text-zinc-300' href={'/'} prefetch={false}>Home</Link>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                        <BiBookBookmark />
                        <Link target='_self' className='hover:text-zinc-300' href={'/education'} prefetch={false}>Minha educação</Link>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                        <TbWriting />
                        <Link target='_self' className='hover:text-zinc-300' href={'/myhistory'} prefetch={false}>Minha história</Link>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2">
                        <MdWorkOutline />
                        <Link target='_self' className='hover:text-zinc-300' href={'/professional'} prefetch={false}>Meu profissional</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;