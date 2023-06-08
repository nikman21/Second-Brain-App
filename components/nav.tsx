"use client";

import Link from 'next/link'
import Image from 'next/image'
import Sidebar from './sidebar';


const Nav: React.FC = () => {
    return (
    <>
        <nav className="flex h-20 w-100 bg-gray-800">
            <Link href="/" className="flex items-center gap-2 font-black text-3xl flex-center text-white ml-4">
                Second Brain
            </Link>
        </nav>

        <Sidebar />
    </>
    )
}

export default Nav