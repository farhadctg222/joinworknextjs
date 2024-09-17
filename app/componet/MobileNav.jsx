'use client'
import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Sheet } from 'react-modal-sheet';


const MobileNav = () => {

    const [isOpen, setopen ]= useState(false)
    return (
        <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
    );
};

export default MobileNav;