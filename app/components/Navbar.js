'use client'
import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { IoIosArrowDown } from "react-icons/io";
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
    const [isOpen, setOpen] = useState(true);

    return (
        <>
            <HamburgerMenu open={isOpen} />
            <nav className='fixed z-20 w-full h-16 px-8 pt-5 overflow-hidden text-white pb-14 font-jost bg-inherit lg:px-32 lg:absolute'>
                <div className='container flex items-center justify-between'>
                    <div className='font-bold logo lg:flex lg:gap-5'>
                        <img className='scale-150 w-7' src='https://www.quillaudits.com/logo/QuillAudit-Icon.svg'></img>
                        <h1 className='hidden lg:block lg:text-3xl lg:font-medium'>QuillAudits</h1>
                    </div>
                    <div className='hidden lg:flex lg:gap-9'>
                        <span className='flex items-center gap-1 cursor-pointer group'>Services <IoIosArrowDown className='transition-all duration-400 group-hover:-rotate-180' /></span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Pricing</span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Our Audits</span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Tools <IoIosArrowDown className='transition-all duration-400 group-hover:-rotate-180' /></span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Resources <IoIosArrowDown className='transition-all duration-400 group-hover:-rotate-180' /></span>
                        <span className='flex items-center gap-1 cursor-pointer group'>Refer-Earn-Secure</span>
                    </div>

                    <button className='w-32 h-8 ml-4 text-xs transition-all duration-300 bg-blue-400 rounded-md cursor-pointer from-blue-700 bg-gradient-to-r hover:bg-blue-700 lg:w-36'>
                        Request An Audit
                    </button>

                    <div className='font-bold cursor-pointer menubtn lg:hidden'>
                        <Hamburger onToggle={toggled => {
                            if (toggled) {
                                setOpen(false)
                            } else {
                                setOpen(true)
                            }
                        }} />
                    </div>
                </div>
                <div className='hidden line lg:block lg:border-[1px] lg:mt-4 border-zinc-500 opacity-35'></div>
            </nav>
        </>
    )
}

export default Navbar