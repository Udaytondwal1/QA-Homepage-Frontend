import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import { FaMedium } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    return (
        <footer className='bg-[url("https://s3-alpha-sig.figma.com/img/466f/9794/3c256938ff139b5b4f3543862c66c66a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCfvz5PL96mQdkYkcYq4j1fkk~rrScX9E00l9TBU254Bm5~GLpsa2Vbs0r4lbsH207C30owVOIPLQj2A0gt8tgsbtcE~~A0xCzOQTioUL2pXp4Mq52~5e8WjDOVb-~xSW~yDVx~7ndQ4Klt8BSdxL5oo7Q1OZbIir3BiILiUlT6QNYr2LtZmgFxWaHDGkpUwRjCXH8d9vNPJYwAwFDBw8cpC8jII14msIBNrkzhJLg-C4cxNh0Lm4zeACJKB4Hu5VMUxoX~gn1ZlARdijhFPqjaqiQURjV3PHASNP5npICxeH9fOsT9hekX3H1iQ~FynRC6b3uI7FvTFp4v6GvjnUw__")] w-full min-h-screen bg-no-repeat bg-cover px-7 py-14  overflow-x-hidden lg:px-32 lg:relative lg:py-8 lg:h-screen'>
            <div className='px-12 lg:px-2 lg:mb-7'>
                <div className='flex -mb-1'>
                    <img className='w-8 scale-150' src='https://www.quillaudits.com/logo/QuillAudit-Icon.svg'></img>
                    <h1 className='mx-5 text-3xl text-white'>QuillAudits</h1>
                </div>
                <span className='pl-[18vw] text-[10px] text-zinc-400 lg:pl-16'>Making Web3 a safer Place</span>
            </div>
            <div className='container grid grid-cols-2 gap-3 my-10 lg:hidden gap-y-4'>

                <button className='w-40 h-8 text-sm text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>WAGSI Grants</button>

                <button className='w-40 h-8 text-xs text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>AMbassador Program</button>

                <button className='w-40 h-8 text-xs text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>Refer-Earn-Secure</button>

                <button className='w-40 h-8 text-xs text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>Partnership Program</button>
            </div>

            <div className='container grid h-auto grid-cols-2 text-white gap-x-4 gap-y-16 lg:flex lg:gap-24'>
                <div className='hidden lg:block'>
                    <div className='pr-4 w-36 heading'>
                        <h1>More About Quill</h1>
                        <div className='mt-1 border-b-2 border-blue-500 line'></div>
                    </div>
                    <div className='flex flex-col gap-3 mt-3 text-xs content text-zinc-300'>
                        <span>About Us</span>
                        <span>FAQs</span>
                        <span>Blockchains We Audit</span>
                    </div>
                </div>
                <div className='lg:ml-12'>
                    <div className='w-32 pr-4 heading'>
                        <h1>Audit Services</h1>
                        <div className='mt-1 border-b-2 border-blue-500 line'></div>
                    </div>
                    <div className='flex flex-col gap-3 mt-3 text-xs content text-zinc-300'>
                        <span>Ethereum Audit</span>
                        <span>Polygon Audit</span>
                        <span>BSC Audit</span>
                        <span>Solana Audit</span>
                        <span>NEAR Audit</span>
                        <span>Algorand Audit</span>
                        <span>Tezos Audit</span>
                        <span>Hyperledger Fabric Audit</span>
                        <span>L1 Audit</span>
                        <span>Polkadot Audit</span>
                        <span>Wallet Audit</span>
                        <span>ZkSync Audit</span>
                        <span>Starknet Audit</span>
                    </div>
                </div>
                <div>
                    <div className='pr-6 w-36 heading'>
                        <h1>Quill Ecosystem</h1>
                        <div className='mt-1 border-b-2 border-blue-500 line'></div>
                    </div>
                    <div className='flex flex-col gap-3 mt-3 text-xs content text-zinc-300'>
                        <span>QuillAI</span>
                        <span>QuillCheck</span>
                        <span>QuillShield</span>
                        <span>QuillAcademy</span>
                        <span>QuillMoniter</span>
                        <span>Web3Suggest</span>
                        <span>Explore All Tools</span>
                    </div>
                </div>
                <div>
                    <div className='pr-7 w-36 heading'>
                        <h1>Other Services</h1>
                        <div className='mt-1 border-b-2 border-blue-500 line'></div>
                    </div>
                    <div className='flex flex-col gap-3 mt-3 text-xs content text-zinc-300'>
                        <span>Red Teaming</span>
                        <span>dApp Pentesting</span>
                        <span>DeFi Diligence</span>
                        <span>NFT Due Diligence</span>
                        <span>Rug Pull Due Diligence</span>
                        <span>Security Consultation</span>
                        <span>Blockchain Forensics</span>
                        <span>KYC (Know Your Customer)</span>
                    </div>
                </div>
                <div>
                    <div className='pr-7 heading w-28'>
                        <h1>Quick links</h1>
                        <div className='mt-1 border-b-2 border-blue-500 line'></div>
                    </div>
                    <div className='flex flex-col gap-3 px-1 mt-3 text-xs content text-zinc-300'>
                        <span>Pricing</span>
                        <span>Audit Process</span>
                        <span>Our Audits</span>
                        <span>Testimonials</span>
                        <span>Security Synopsis</span>
                        <span>Blog</span>
                        <span>Clients</span>
                        <span>Careers</span>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <div className='pr-4 w-36 heading'>
                        <h1>More About Quill</h1>
                        <div className='mt-1 border-b-2 border-blue-500 line'></div>
                    </div>
                    <div className='flex flex-col gap-3 mt-3 text-xs content text-zinc-300'>
                        <span>About Us</span>
                        <span>FAQs</span>
                        <span>Blockchains We Audit</span>
                    </div>
                </div>
            </div>
            <div className='text-sm mt-7 text-zinc-300 lg:-mt-64'>
                <h1 className='font-semibold'>Contact Us:</h1>
                <div className='mt-2'>
                    <div className='mb-1'>
                        <EmailIcon /><span className='ml-1 underline'>audits@quillhash.com</span>
                    </div>
                    <div>
                        <TelegramIcon /><span className='ml-1 underline'>t.me/quillaudits</span>
                    </div>
                    <div className='mt-5'>
                        <FmdGoodIcon /><span className='ml-1 font-semibold'>Our Location:</span>
                    </div>
                    <div className='mt-3 tracking-wide w-72 lg:w-44'>
                        Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box : 416654
                    </div>
                </div>
            </div>
            <div className='container flex mt-8 gap-14 lg:-mb-16 lg:mt-10 lg:w-80'>
                <img className='w-32' src='https://s3-alpha-sig.figma.com/img/f652/2a8a/7ababdcdf0d80fb9ef74060cdac9209f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDAwJj6b7F0hFGlQPrvBQ4x8C0wjXXsXlJnkPu3kecCBk~Sa6DJTJ-NUHru8sUOaXh~b9C9NPTsOwLBmt3d3aSO~x~wwlenqV5oRuMPCJpcymU8yg4HlLCjI00ShA1UlB2hZc7am39g-CUlmolSyer8JzgqzZWzbUBHzBcdOGcGCpM1lm9Ll2VKklaNKlrCkNbI-a7qOqP9I56g6FKD8-~u2UrlowiefEKXw~A-sS7OnlGG1DAE9h5tXb5~WfRZ3KhHDBmjMMJVDkNutkOKOxHMz2SgHkxSt9DdZLa2QpatHzCVBsWFsX74huikOiJWVZuU3t76ZerXgbor6fJO9cw__'></img>
                <img className='w-32' src='https://s3-alpha-sig.figma.com/img/1a3c/3a5d/4e3161bde003ae7089489b23aae58f1a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmgm6-76CiWFF~yd2YkuiQBPImZcrnU~5pQVwzwjm3oVqVQ73yYohLpIwms6e4aLQwqroMfTXzSmjAWOrFK4QxszY9JKHomjmmVRpJFSsSTA5AFLzpUrZImgrlZbKGig5NaiCB-sr7xjoOOVQYklLXy7SipsJUmGYGePBadlrPGvyNrPjbegE2av~fIzuoh-1CKqFMBqiRthFqm-gaSsWspeTtxfgHOAb33f~ln9o~eN9JcJxadX~b-9Nml09kCqin1duv1TBtWhsXAVpgtTlX~u10opQj2SOuU72ixC-Jo4gDKvlT1t5jM8cQmo-OjofHv74GA~ZGcFMbL4NLxzrw__'></img>
            </div>
            <div className='flex items-center gap-6 my-8 text-white icon-container lg:justify-end'>
                <XIcon className='cursor-pointer size-6' />
                <LinkedInIcon className='cursor-pointer size-6' />
                <TelegramIcon className='cursor-pointer size-7' />
                <RedditIcon className='cursor-pointer size-7' />
                <FaMedium className='cursor-pointer size-7' />
                <FaDiscord className='cursor-pointer size-7' />
                <YouTubeIcon className='cursor-pointer size-7' />
            </div>
            <div className='my-4 border-b-2 opacity-70 border-zinc-300 line'></div>
            <div className='flex flex-col gap-4 text-xs text-center text-white'>
                <h5>Privacy Policy</h5>
                <h6 className='text-zinc-300'>All Rights Reserved. &#169; Copyright 2023. QuillAudits - LLC</h6>
            </div>
            <div className='hidden lg:block lg:absolute lg:bottom-96 lg:right-32 min-[1450px]:bottom-52'>
                <div className='pr-4 text-white w-36 heading'>
                    <h1>Our Programmes</h1>
                    <div className='mt-1 border-b-2 border-blue-500 line'></div>
                </div>
                <div className='container hidden gap-3 my-10 lg:flex gap-y-4 lg:my-4'>
                    <button className='w-40 h-8 text-sm text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>WAGSI Grants</button>

                    <button className='w-40 h-8 text-xs text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>AMbassador Program</button>

                    <button className='w-40 h-8 text-xs text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>Refer-Earn-Secure</button>

                    <button className='w-40 h-8 text-xs text-white rounded-sm cursor-pointer bg-gradient-to-r to-blue-400 from-blue-700'>Partnership Program</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer