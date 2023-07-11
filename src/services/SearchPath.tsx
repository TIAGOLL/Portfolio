"use client"

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';


function SearchPath (){

    const pathname = usePathname();

    return pathname;

    
}

export default SearchPath;