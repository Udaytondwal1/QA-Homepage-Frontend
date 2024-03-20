'use client'

import React from 'react'
import Card from './Card'

const CDPInfo = () => {
    return (
        <div className='relative pl-5 pr-8 my-5 overflow-x-hidden text-lg lg:pl-80 lg:pr-[47vw] lg:text-sm'>
             <div className='container pl-10 pr-24 lg:absolute lg:-right-[57vw] lg:top-[7vh] hidden lg:block'>
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
            <p className='paragraph font-poppins'>
                Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally.
            </p>
            <h1 className='text-3xl font-bold my-7 lg:text-2xl'>CarpeDiem Pension's Flexible, Blockchain-Enabled Future</h1>
            <p className='paragraph'>
                CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.
            </p>
            <div className='image my-7 lg:w-[38vw]'>
                <img className='rounded-md' src='https://s3-alpha-sig.figma.com/img/4ac7/d013/b52d6815e1eea17ca18b12bc2668392c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQTfTIM~VIjrj1X2wDJcjNX9EYF6fA2mzV8LanbjWIFdB4Ptr8NSt~PC8~TNkoZPiXtE0030JR8atxC3-pgkyiW5bQw3BYZGFzsKllXqpyWEVHJFwXw~7DnW0MfbSNp7d~v2M4dMG7PS1EXC3a6D4dwJeL5gCDcpZRzgKZMKzrNrphjxUuRQpQasAgtHkfHdLF2DjzvRjKZxEYLXAitAqHQ4wKMDsr2WJjfG3nabOow6bDYhY3CG5lUMqYqgRhi92tZEibJ3yF2HncBsyHROb7mu-s1H9ncX8ojihF-oKEz9VLVB7NiRMldQYvQGt0~bf9F5XasaJzWIIRP94Yp9Eg__'></img>
            </div>
            <h1 className='text-3xl font-bold my-7 lg:text-2xl'>CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting</h1>
            <p className='paragraph'>
                CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.
            </p>
            <div className='lg:w-[30vw] image my-7'>
                <img className='rounded-md' src='https://s3-alpha-sig.figma.com/img/50d4/d7ce/b61b030e263e7ab85ddd3fa68d0d7691?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8LtT1La1RIBnihPzBqUgjbqJjWq3dxFCgcKE~7AJNJCjA5rSjKNHIkG5G5IeBdtHEXKBGqNIU0iNbpMG1FUr2oFNG-byLgB770Tlsdo5ojLHANHaRFUuxDmTsYVM4p7VwNS7YEjepBDpy3XRRc7iDWvK-tP2jHfWOjYvtU2YJn2soo5snMX7Hfn72Sl~6NWunNJOoFbIKlWNFfvVF5fG78rPj4PPOEoSymYSC-qx-6soDZR6t90Qa~V6pXjQUfR2KGjxM6ddfdxG5yd5T7eBqvzKyX8JuNyun5gsbhPKcfWGYvPJ19K-0ZVDiC8Lrz4uDoT-s0IAIzMi5MX16pmSg__'></img>
            </div>
            <div className='pr-14'>
                <h1 className='px-1 text-3xl font-bold my-7 lg:text-2xl'>CarpeDiem Pension's Journey Through our Audit Process</h1>
            </div>
            <div className='O-list'>
                <h1 className='px-1 text-2xl font-bold my-7 lg:text-xl'>1. Information gathering:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.</li>
                    <li className='my-4'>Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.</li>
                    <li className='my-4'>Discussed client concerns and specific areas of focus for the audit.</li>
                </ul>
                <h1 className='px-1 text-2xl font-bold my-7 lg:text-xl'>2. Manual Code Review:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Conducted a line-by-line review of the smart contract code, focusing on:</li>
                    <ul className='px-5 list-disc'>
                        <li className='my-4'><i className='font-semibold'>Vulnerability identification:</i> Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues, etc.</li>
                        <li className='my-4'><i className='font-semibold'>Logic flows:</i>  Identifying inconsistencies or unintended behaviours in the code logic.</li>
                        <li className='my-4'><i className='font-semibold'>Tokenomics correctness: </i> Verifying if the code accurately implements the intended economic model and token distribution mechanisms.</li>
                        <li className='my-4'><i className='font-semibold'>Solidity best practices: </i> Compliance with secure coding standards and adherence to established guidelines.</li>
                    </ul>
                </ul>
                <h1 className='px-1 text-2xl font-bold my-7 lg:text-xl'>3. Functional Testing:</h1>
                <ul className='px-8 '>
                    <ul className='px-5 list-disc'>
                        <li className='my-4'>Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.</li>
                        <li className='my-4'>Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.</li>
                        <li className='my-4'>Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).</li>
                        <li className='my-4'>Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.</li>
                    </ul>
                </ul>
                <h1 className='px-1 text-2xl font-bold my-7 lg:text-xl'>4. Automated Testing:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.</li>
                    <li className='my-4'>Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.</li>
                    <li className='my-4'>Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.</li>
                </ul>
                <h1 className='px-1 text-2xl font-bold mt-7 lg:text-xl'>5. Reporting & </h1>
                <h1 className='px-8 text-2xl font-bold mb-7 lg:text-xl'>Remediation:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.</li>
                    <li className='my-4'>Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.</li>
                    <li className='my-4'>Collaborated with the CDP team to prioritize and address the identified issues.</li>
                    <li className='my-4'>Conducted additional verification testing after vulnerability fixes were implemented.</li>
                </ul>
            </div>
            <h1 className='my-5 text-3xl font-bold lg:text-2xl'>QuillAudits' Strategic Approach to CDP Security Audits</h1>
            <p className='pr-8 mb-5 paragraph'>
                We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.
            </p>
            <h1 className='my-5 text-3xl font-bold lg:text-2xl'>Comprehensive Audit Discoveries and Remediation Strategies</h1>
            <p className='pr-8 mb-5 paragraph'>
                Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them:
            </p>
            <div className='O-list'>
                <h1 className='px-1 text-2xl font-bold mt-7 lg:text-xl'>1. Unauthorized Claim/</h1>
                <h1 className='px-8 text-2xl font-bold mb-7 lg:text-xl'>Compound:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.</li>
                </ul>
                <h1 className='px-1 text-2xl font-bold mt-7 lg:text-xl'>2. Precision Loss in</h1>
                <h1 className='px-8 text-2xl font-bold mb-7 lg:text-xl'>mintCDP():</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.</li>
                </ul>
                <h1 className='px-1 text-2xl font-bold my-7 lg:text-xl'>3. Multiplication Accuracy:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.</li>
                </ul>
                <h1 className='px-1 text-2xl font-bold mt-7 lg:text-xl'>4. Incorrect Share</h1>
                <h1 className='px-8 text-2xl font-bold mb-7 lg:text-xl'>Allocation:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.</li>
                </ul>
                <h1 className='px-1 text-2xl font-bold mt-7 lg:text-xl'>5. Logic Error in Referral</h1>
                <h1 className='px-8 text-2xl font-bold mb-7 lg:text-xl'>Handling:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Users could claim/compound a A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system. amount without making a deposit or waiting for the stipulated time.</li>
                </ul>
                <h1 className='px-1 text-2xl font-bold my-7 lg:text-xl'>6. Referral Exploitation:</h1>
                <ul className='px-8 list-disc'>
                    <li className='my-4'>Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.</li>
                </ul>
            </div>
            <h1 className='mt-5 text-3xl font-bold lg:text-2xl lg:mb-5'>Remediation & Impact:</h1>
            <h1 className='mb-5 text-3xl font-bold lg:text-2xl lg:hidden'>Impact:</h1>
            <p className='pr-5 mb-5 paragraph'>
                All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include
            </p>
            <ul className='px-8 list-disc'>
                <li className='my-4'>Implementation of reentrancy protection mechanisms.</li>
                <li className='my-4'>Accurate handling of decimal values using established libraries or best practices.</li>
                <li className='my-4'>Revised calculations with proper scaling factors.</li>
                <li className='my-4'>Fixing logic errors to ensure deposits and waiting periods are enforced.</li>
                <li className='my-4'>Addressing referral system vulnerabilities to prevent abuse.</li>
            </ul>
            <div className=''>
            <strong>Embed this tweet:-</strong> <span className='text-blue-500 underline'>https://x.com/
            CarpeDiemCDP/
            status/1742906560794296402?s=20</span>
            </div>
            <p className='hidden pr-8 my-5 paragraph'>
            CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust.
            </p>
            <Card />
        </div>
    )
}

export default CDPInfo