import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Card = () => {
    return (
        <div className='relative my-5 mt-28 w-[87vw] h-[48vh] shadow-lg lg:w-[32vw] lg:h-[40vh]'>
            <div className='w-full rounded-t-md h-[40%] bg-gradient-to-r from-blue-900 via-blue-950 to-indigo-900 via-30%'>
                <div className='p-2 h-14'>
                    <BiSolidQuoteLeft className='text-white size-10' />
                </div>
                <div className='mt-10 text-white pl-44 lg:mt-1 lg:pl-10'>
                    <h1 className='text-2xl font-bold lg:hidden'>Carpediem</h1>
                    <h4 className='text-sm text-zinc-300 lg:hidden'>TEAM</h4>
                    <h1 className='hidden text-2xl font-bold lg:block'>Sally Radley</h1>
                    <h4 className='hidden text-sm text-zinc-300 lg:block'>WebGfi.CEO</h4>
                </div>
            </div >

            <div className='absolute overflow-hidden bg-cover rounded-md w-36 h-36 top-20 left-3 lg:top-10 lg:left-72'>
                <div className='size-full scale-[5.2] -ml-24 mt-14 bg-right  rounded-md bg-contain bg-[url("https://s3-alpha-sig.figma.com/img/d81a/c3fb/63886839737d20794c060a1fb4f2c6aa?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPCp8SJ0-m3Q32KQNKVxhFzFSRM2bBeKx1DOYcUg98azdX5lLMrbwXZ09qXXQOHDLIXgMwhMwmJJ1NDi1QZZiyiro6EQFhgcDm667PHBNDSU4XBva8K4NErUiQHopIZa054HAZ0xe1hpiQw88BAgNhA1aTkxhf2v28FnKK0GQvbffpepBu4dz9ZinrMshSTvwZWiu7l4x9urIAZRAOX0zg0Kd8OGTrCW8xqgvYZHTeGLognPn397XKakYi0V8ANyAmScO1u891G~9F6w7V5kX3prrxLW0bhqpTtrI-3d6973qkBqnGv-n81w5W33EpqbNTrZ4F-FuTDu209wj5zCvw__")] lg:bg-none lg:bg-blue-600'>
                </div>
            </div>

            <div className='relative w-full h-[60%] rounded-b-md '>
                <div className='flex items-center justify-end h-5 gap-3 px-5 text-yellow-400 py-7 lg:pl-10 lg:justify-start lg:pt-10'>
                    <FaStar className='size-5 lg:size-5' />
                    <FaStar className='size-5 lg:size-5' />
                    <FaStar className='size-5 lg:size-5' />
                    <FaStar className='size-5 lg:size-5' />
                    <FaStar className='size-5 lg:size-5' />
                </div>
                <div className='mx-3 text-[15px] leading-6  mt-4 w-72 lg:w-96 lg:px-2 lg:text-xs lg:ml-8'>
                    <p>
                        “It felt like the auditing team was available within a short timeframe, which was excellent. The auditing process looked thorough, and I really appreciate the fact that you took time to investigate GAS optimizations.”
                    </p>
                </div>
                <div className='absolute w-full px-4 rotate-180 top-48 lg:top-32 lg:px-4'>
                    <BiSolidQuoteLeft className='text-blue-700 size-8 lg:size-10' />
                </div>
            </div>
        </div>
    )
}

export default Card