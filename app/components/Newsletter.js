import React from 'react'

const Newsletter = () => {
    return (
        <div className='text-center '>
            <div className=' lg:hidden'>
                <h4>Security First Newsletter by QuillAudits</h4>
                <div className='w-20 h-[2px] mt-2 mb-10 bg-blue-500 mx-40'></div>
                <div className='w-full h-40 overflow-hidden text-center'>
                    <img className='scale-100' src='https://img.freepik.com/free-vector/new-message-concept-landing-page_23-2148317868.jpg?t=st=1710896639~exp=1710900239~hmac=dbecaa20e8f682a4a9e359af241b7b63a019307bbb6aec539aeb8d6ec7e7d623&w=996'></img>
                </div>
                <p className='px-24 my-5 text-sm'>
                    DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to your Inbox. Explore our weekly newsletter: <b className='text-blue-500'>HashingBits</b>. Stay updated on everything we’re publishing. Stand a step ahead.
                </p>
                <input className='block w-64 h-8 px-2 py-5 mx-16 mb-4 text-xs border-2 outline-none border-zinc-900' type='text' placeholder='vitalik@ethereum.org'></input>
                <button className='h-8 mb-24 text-sm text-white rounded-md cursor-pointer w-28 bg-gradient-to-r to-blue-400 from-blue-700 hover:bg-blue-600'>Subscribe</button>
            </div>

            <div className='hidden px-48 lg:flex'>
                <div className='w-1/2 px-12 py-20 text-left'>
                    <h4 className='mb-10 font-bold text-blue-500'>NEWSLETTER</h4>
                    <h1 className='mb-3 text-4xl font-bold '>Security First News</h1>
                    <h1 className='text-4xl font-bold'>Letter by QuillAudits</h1>
                    <p className='my-5 mt-12 text-xs pr-14 w-80'>
                        Subscribe for the most Exclusive Weekly security based newsletter and covering all the  recent hacks up to date.
                    </p>
                </div>
                <div className='relative w-1/2'>
                    <img className='' src='https://img.freepik.com/free-vector/new-message-concept-landing-page_23-2148317868.jpg?t=st=1710896639~exp=1710900239~hmac=dbecaa20e8f682a4a9e359af241b7b63a019307bbb6aec539aeb8d6ec7e7d623&w=996'></img>
                    <input className='w-full h-8 px-2 py-5 mb-5 text-xs border-2 outline-none' type='text' placeholder='vitalik@ethereum.org'></input>
                    <button className='absolute text-white rounded-md cursor-pointer h-7 w-28 bg-gradient-to-r to-blue-400 from-blue-700 right-2 bottom-12 min-[1500px]:bottom-7'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter