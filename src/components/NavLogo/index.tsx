
import Link from 'next/link';
import Image from 'next/image';


const NavLogo = () => {


    return (
        <>
            <div className='items-center justify-center w-full flex flex-row'>
                <Link href="https://tiagoll.github.io/portfolio/" prefetch={false}>
                    <Image src={'images/logo.png'} alt="Logo" width={300} height={0} />
                </Link>
            </div>

        </>
    )
}

export default NavLogo;