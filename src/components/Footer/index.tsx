import Link from 'next/link';
const Footer = () => {

    return (
        <footer className='flex flex-col bg-secondary text-white gap-2'>

            {/* nav */}
            <div className="flex flex-col">
                <Link href={'/'} >Home</Link>
                <Link href={'/education'}>Minha educação</Link>
                <Link href={'/myhistory'}>Minha história</Link>
                <Link href={'/professional'}>Meu profissional</Link>
            </div>

            {/* contact */}
            <div className="flex flex-col">
                <Link href={"mailto:tiagoepitanga10@gmail.com"} prefetch={false}>Email: tiagoepitanga10@gmail.com</Link>
                <Link href={'tel:5542984066420'} prefetch={false}>Telefone: 42984066420</Link>
            </div>

            {/* latest projects */}
            <div className="flex flex-col">
                
            </div>

            {/* social links */}
            <div className="flex flex-col">
                <Link href={'https://www.instagram.com/tiagoemanueldelima/'}>Instagram</Link>
                <Link href={'https://www.linkedin.com/in/tiago-emanuel-de-lima/'}>Linkedin</Link>
                <Link href={'https://github.com/TIAGOLL'}>GitHub</Link>
            </div>

        </footer>
    )
}
export default Footer;