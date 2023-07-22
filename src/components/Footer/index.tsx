import Link from 'next/link';

import { BiSolidPhoneCall, BiMailSend, BiLogoInstagram, BiLogoLinkedin, BiLogoGithub, BiHome, BiBookBookmark } from 'react-icons/bi'
import { TbWriting } from 'react-icons/tb'
import { MdWorkOutline } from 'react-icons/md'
import Image from 'next/image';

const Footer = () => {

    return (
        <footer className='flex flex-col bg-secondary text-white gap-2 p-2 mt-10'>


            {/* contact */}
            <div className="flex flex-col rounded-lg border-2 border-zinc-500 p-1 shadow-lg">
                <div className='w-full flex flex-col relative pb-2'>
                    <h1 className="font-semibold">Contato</h1>
                    <span className='border-b-4 border- w-1/12 absolute left-0 bottom-1 rounded-full'></span>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <BiMailSend /><Link href={"mailto:tiagoepitanga10@gmail.com"} prefetch={false}> tiagoepitanga10@gmail.com</Link>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <BiSolidPhoneCall /><p>(42) 98406-6420</p>
                </div>
            </div>

            {/* social links */}
            <div className="flex flex-col rounded-lg border-2 border-zinc-500 p-1 shadow-lg">
                <div className='w-full flex flex-col relative pb-2'>
                    <h1 className="font-semibold">Redes socias</h1>
                    <span className='border-b-4 border- w-1/12 absolute left-0 bottom-1 rounded-full'></span>
                </div>

                <div className="flex flex-row justify-start items-center gap-2">
                    <BiLogoInstagram /><Link href={'https://www.instagram.com/tiagoemanueldelima/'}>Instagram</Link>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <BiLogoLinkedin /><Link href={'https://www.linkedin.com/in/tiago-emanuel-de-lima/'}>Linkedin</Link>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <BiLogoGithub /><Link href={'https://github.com/TIAGOLL'}>GitHub</Link>
                </div>
            </div>

            {/* nav */}
            <div className="flex flex-col rounded-lg border-2 border-zinc-500 p-1 shadow-lg">
                <div className='w-full flex flex-col relative pb-2'>
                    <h1 className="font-semibold">Links</h1>
                    <span className='border-b-4 border- w-1/12 absolute left-0 bottom-1 rounded-full'></span>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <BiHome />
                    <Link href={'/'} >Home</Link>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <BiBookBookmark />
                    <Link href={'/education'}>Minha educação</Link>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <TbWriting />
                    <Link href={'/myhistory'}>Minha história</Link>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <MdWorkOutline />
                    <Link href={'/professional'}>Meu profissional</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer;