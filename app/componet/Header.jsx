'use server'
import Link from 'next/link';

import React from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    return (
        <header className="py-8 sticky  top-0 bg-[#00d8ff] xl:py-8 text-">
            <div className="container  mx-auto flex justify-between  items-center">
               {/* logo */}
                <Link href="/">
                <h1 className=" ml-5 text-2xl md:text-lg md:text-md  font-semibold">
                    Join Work <span className="text-accent">.</span>
                </h1>
                </Link>
                {/* desktop nav & hire me button */}
                <div className=" hidden xl:flex items-center gap-3">
                    <Nav></Nav>
                    <Link href="/contact">
                    <button className="btn text-white btn-success mr-5">Hire Me</button>
                    </Link>

                </div>
                {/* mobile nav */}
                <div className="xl:hidden  mr-5">
                   <MobileNav></MobileNav>

                </div>
               

            </div>

        </header>
      
    );
};

export default Header;