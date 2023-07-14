import Link, { LinkProps } from "next/link";

type NavLinkProps = {
    children: string,
} & LinkProps;

const NavLink = ({ children, href, ...rest }: NavLinkProps) => {
    return (
        <>
            <Link href={href} {...rest} prefetch={false} className="p-2 border font-semibold border-zinc-200 text-zinc-600 hover:bg-zinc-100 lg:hover:animate-bounce lg:hover:bg-[#5A2CA4] lg:rounded-full pl-2 pr-2 lg:hover:shadow-link lg:border-none lg:text-white lg:font-bold">
                {children}
            </Link>
        </>
    )
}

export default NavLink;