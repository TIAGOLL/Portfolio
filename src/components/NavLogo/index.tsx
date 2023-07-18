
import Link from 'next/link';
import Image from 'next/image';


const NavLogo = () => {


    return (
        <>
            <div className='items-center justify-start lg:pl-5 lg:w-full'>
                <Link href="https://tiagoll.github.io/portfolio/" prefetch={false}>
                    <Image src={'images/logo.png'} alt="Logo" width={180} height={0} />
                </Link>
            </div>
        </>
    )
}

export default NavLogo;