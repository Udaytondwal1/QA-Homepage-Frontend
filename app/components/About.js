'use client'

import React from 'react'

const About = () => {
  return (
    <div className='overflow-x-hidden lg:px-[28vw]'>
      <div className='container  divide-x-2 lg:flex lg:gap-12 lg:w-[43vw] lg:h-60 lg:mb-12'>
        <div className='pl-10 pr-24 mt-20 text-lg leading-5 lg:px-7'>
          <div className='mb-5 text-lg font-bold bg-pink-300 font-inter lg:text-sm'>Before QuillAudits</div>
          <p className='mb-2 lg:text-xs'>
            Exploits like reentrancy and front-running can let attackers withdraw extra funds abd manipulate transaction timing for unfair gains.
          </p>
          <p className='mb-16 lg:text-xs'>
            Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely disrupting the systems's economic balamce
          </p>
        </div>
        <div className='lg:mt-20 lg:px-7'>
          <div className='pl-10 text-lg leading-5 pr-7 lg:pr-0'>
            <div className='mb-5 text-lg font-bold bg-blue-300 font-inter lg:text-sm'>After QuillAudits</div>
          </div>
          <div className='pl-10 pr-16 text-lg leading-5 lg:pr-0 lg:text-xs'>
            <p className='mb-5'>
              Implementation of reentrancy protection mechanisms.
            </p>
            <p className='mb-16'>
              Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.
            </p>
          </div>
        </div>
      </div>

      <div className='container pl-10 pr-24 lg:absolute lg:-right-[55vw] lg:-bottom-[70vh] lg:hidden'>
        <div className='flex flex-col justify-around gap-1 px-5 pb-5 mb-10 border-2 border-blue-400 rounded-md shadow-sm w-72 shadow-blue-200 h-36 font-inter'>
          <div className='flex flex-col'>
            <span className='text-sm text-zinc-400'>Headquarters</span>
            <span className='font-bold'>Switzerland</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm text-zinc-400'>Chain</span>
            <span className='font-bold'>Pulse Blockchain</span>
          </div>
        </div>
      </div>

      <div className='text-3xl font-semibold text-center text-blue-900 lg:text-2xl font-jost'>
        <div className='lg:hidden'>
        <h1 className='px-4'>See how QuillAudits</h1>
        <div className='mb-10 px-14'>
          <h3>is a trusted partner in 1000+ Audit</h3>
          <h3>stories</h3>
        </div>
        </div>
        <div className='hidden lg:block'>
        <h1 className=''>See how QuillAudits is a trusted partner in </h1>
        <div className='mb-10 px-14 lg:mb-5'>
          <h3>1000+ Audit stories</h3>
        </div>
        </div>
        <button className='h-12 mb-5 text-sm text-white bg-blue-500 rounded-md cursor-pointer w-52 from-blue-700 bg-gradient-to-r'>
          Request an Audit
        </button>
      </div>
    </div>
  )
}

export default About