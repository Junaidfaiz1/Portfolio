"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ links }) => {  
    const pathName = usePathname();
    return(
        links.map((link, index) => (
            <Link
                key={index}
                href={link.url}
                className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : ""} font-medium`}
            >
                {link.title}
            </Link>
        ))
    )
}

export default NavLinks;