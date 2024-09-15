'use server'
import Link from 'next/link';

import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
               {/* logo */}
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Join Work <span className="text-accent">.</span>
                </h1>
                </Link>
                {/* desktop nav & hire me button */}
                <div className=" hidden xl:flex items-center gap-8">
                    <Nav></Nav>
                    <Link href="/contact">
                    <button className="bg-danger">Hire Me</button>
                    </Link>

                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    mobile view

                </div>
               

            </div>

        </header>
      
    );
};

export default Header;