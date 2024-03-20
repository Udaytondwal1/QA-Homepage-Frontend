'use client'

import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const HamburgerMenu = ({open}) => {
    // const jadu = 100;
   
    return (
        <nav className="fixed z-20 overflow-x-hidden w-full bg-black opacity-90 h-[65vh] text-white transition-all duration-300" style={{right:`${open?"100":"0"}%`}}>
            <div className = 'px-10 mt-28' >
            <div className='flex flex-col gap-9'>
                        <span className='flex items-center gap-1 cursor-pointer group'>Services <IoIosArrowDown className='transition-all duration-400 group-hover:-rotate-180' /></span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Pricing</span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Our Audits</span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Tools <IoIosArrowDown className='transition-all duration-400 group-hover:-rotate-180' /></span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Resources <IoIosArrowDown className='transition-all duration-400 group-hover:-rotate-180' /></span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Refer-Earn-Secure</span>
                    </div>
            </div >
        </nav >
    )
}

export default HamburgerMenu