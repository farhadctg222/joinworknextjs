'use client'
import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Sheet } from 'react-modal-sheet';


const MobileNav = () => {

    const [isOpen, setopen ]= useState(false)
    return (
        <>
        <nav onClick={()=>setopen(true)}>
            <FiAlignJustify />

        <Sheet isOpen={!isOpen} onClose={() => setopen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>hhhhh</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
        </nav>
        </>
    );
};

export default MobileNav;