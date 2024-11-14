'use client'

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {
    const navLinks = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/posts",
            label: "Posts",
        },
        {
            href:"/create-post",
            label: "Create post",
        }
    ];

    const pathname = usePathname()

    return (
        <main className='flex justify-between border-b px-7 py-4 items-center'>
            <Link href="/">
            <Image
                src='https://bytegrad.com/course-assets/youtube/example-logo.png'
                alt='logo'
                className='w-[35px] h-[35]'
                width='35'
                height='35'
            />
            </Link>

            <ul className='flex gap-x-5 text-[14px]'>
                {
                    navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                className={
                                    `${pathname === link.href ? 'text-zinc-900 font-bold' : 'text-zinc-400'}`
                                }
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    );
}