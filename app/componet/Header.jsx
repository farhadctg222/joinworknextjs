'use server'
import Link from 'next/link';

import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="py-8 bg-[#1dfff01c] xl:py-8 text-">
            <div className="container mx-auto flex justify-between  items-center">
               {/* logo */}
                <Link href="/">
                <h1 className=" ml-5  text-md text-sm text-xs text-lg font-semibold">
                    Join Work <span className="text-accent">.</span>
                </h1>
                </Link>
                {/* desktop nav & hire me button */}
                <div className=" hidden xl:flex items-center gap-3">
                    <Nav></Nav>
                    <Link href="/contact">
                    <button className="bg-danger mr-5">Hire Me</button>
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