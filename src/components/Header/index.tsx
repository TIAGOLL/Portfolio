import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Header = () => {

    return (
        <>
            <header className="bg-secondary flex w-screen text-white">
                <div>
                    <h2 className="font-main text-6xl pt-5 pl-10 pb-5">
                        <Link href="https://tiagoll.github.io/portfolio/" prefetch={false}>
                            <Image src={'/portfolio/logo.png'} alt="Logo" width={300} height={0} />
                        </Link>
                    </h2>
                </div>
                <div className='container flex w-full items-center justify-end pr-10'>
                    <nav className="space-x-12 flex flex-row items-center justify-center font-bold">
                        <Link className='p-3 hover:animate-bounce hover:bg-[#5A2CA4] rounded-full pl-2 pr-2 hover:shadow-link' href={'/myhistory'} prefetch={false}>Minha história</Link>
                        <Link className='p-3 hover:animate-bounce hover:bg-[#5A2CA4] rounded-full pl-2 pr-2 hover:shadow-link' href={'/education'} prefetch={false}>Educação</Link>
                        <Link className='p-3 hover:animate-bounce hover:bg-[#5A2CA4] rounded-full pl-2 pr-2 hover:shadow-link' href={'/profissional'} prefetch={false}>Profissional</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;