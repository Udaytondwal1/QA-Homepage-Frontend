
import React from 'react'

const Homepage = () => {

  //put image links here for better readability.
  const imgLink = 'https://s3-alpha-sig.figma.com/img/7f05/53d8/7f3ddcce107256b4e74af14e8104b759?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUcdwe7NdSushd2JHLvtF0vO2O6s1pboach2Gme9xm9qnODX~M0r-6~Vhkl6K4lMJMAbBNQpZphpJbSiG5uaWYmp5EzKTelAR9HXtbyqyEowggFLKZqDu~V7YhKvXkMblWoBaknNvMMnjh1Drx8ypfqzvRQfH-iQ-Tua7CKeQpI~605LTB~nXeOBBNitt04x9rEPudwUBwezgwNwbpbKYztjEHqViI8SdSEVlNVBsrvxB6S4flilifl0CU-c2SGnOpT07fws9N5lpybYPcXcvTWXIIbZ1nt1kU89fp6BU0pdw~73EpnCamLmdb5ue9dt973nhL1~P-u3Pk~cUKPrWg__';

  const imgSmLink = 'https://s3-alpha-sig.figma.com/img/697f/d0da/7fe50eddbb1aafa13170597391afbbdb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d1gS3aP2Lf-UJNgcurs69~lZtHMbSgSJYSnQ3fz9Xf1ofQl4OzfdOtRA8hu-YKSRtQv6Y9ScBjaFTOTxliXThrjmw-KlN42qdYMtub3y2OQLC57-G0xdQ8YxTMsGL~ybhP2parRVDKNnBMhKikxjGpwAW9Cn0J0vhvNQZ79Pvf5iZvq8y2T5yA4X4I7Bqo93kAE0U~eXCI3U6CtU8AHYf0ScV9ScE7bTKPWuYU0Mr7nJQMY1z0ahx5ldZIoLM82mZ09yEb8phK2kVe~IwWARnLaaWykhSGrbhJjewzMIajYuRxYmXRKxVCDnfThHAG8N7WHx7eou5nac0-HJWikfIg__';
  

  return (
    <div className=' w-full font-jost min-h-screen  lg:min-h-[82vh] overflow-x-hidden text-white bg-[url("https://s3-alpha-sig.figma.com/img/466f/9794/3c256938ff139b5b4f3543862c66c66a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCfvz5PL96mQdkYkcYq4j1fkk~rrScX9E00l9TBU254Bm5~GLpsa2Vbs0r4lbsH207C30owVOIPLQj2A0gt8tgsbtcE~~A0xCzOQTioUL2pXp4Mq52~5e8WjDOVb-~xSW~yDVx~7ndQ4Klt8BSdxL5oo7Q1OZbIir3BiILiUlT6QNYr2LtZmgFxWaHDGkpUwRjCXH8d9vNPJYwAwFDBw8cpC8jII14msIBNrkzhJLg-C4cxNh0Lm4zeACJKB4Hu5VMUxoX~gn1ZlARdijhFPqjaqiQURjV3PHASNP5npICxeH9fOsT9hekX3H1iQ~FynRC6b3uI7FvTFp4v6GvjnUw__")] bg-no-repeat bg-cover lg:flex'>
      <div className='mt-[12vh] pl-[8%] lg:hidden'>
        Case Studies
        <div className='w-20 h-1 mt-2 bg-blue-500 '></div>
      </div>

      <div className='relative rounded-md flex items-center justify-center w-full h-64 mt-5 bg-green-800 bg-gradient-to-r from-black lg:mt-40 lg:size-[25vw] lg:ml-80 lg:flex-col'>

        <img className='scale-90 lg:scale-75' src={imgLink}></img>
        <p className='hidden lg:block lg:w-60 lg: lg:bottom-7 lg:left-8 lg:absolute lg:text-[13px]'>
        Carpe Diem Pension, a blockchain-based retirement fund, offers permanent payouts through CDP deposits, with a 4.32% annual inflation claimable by depositors.
        </p>

        <div className='w-[28%] h-12 bg-white absolute -bottom-6 right-10 rounded-md py-1.5 px-2 lg:top-8 lg:-right-16 lg:w-[32%] lg:h-14 lg:py-3'>
          <img src={imgSmLink}></img>
        </div>
      </div>

      <div className='pl-10 mt-16 pr-14 lg:px-1 lg:w-[31vw] lg:h-80 lg:mt-64 lg:pt-5 lg:ml-7 '>
        <h1 className='mb-8 text-3xl font-semibold leading-snug'>Securing Trust :
          Boosting Security and Strengthening
          Trust and Carpe Diem Pension
        </h1>
        <p className='mb-20 text-xl font-poppins lg:text-[15px] lg:w-96 lg:pr-6 lg:leading-tight'>QuillAudits enhances Carpe Diem
          Pension by addressing 33 vulnerabilities on the Pulse
          blockchain, boosting security and user trust in digital pensions.
        </p>
        <h6 className='text-[10px] mb-4 lg:hidden'>{`QuillAudits -> Resources -> Case Studies -> kucoin`}</h6>

        <div className='hidden lg:flex lg:gap-2 lg:items-center lg:absolute lg:left-80 lg:pl-2 lg:text-sm lg:text-zinc-400'>
          <span>{`QuillAudits -> `}</span>
          <span>{`Resources -> `}</span>
          <span className='text-white'>Case Studies</span>
        </div>
      </div>
    </div>
  )
}

export default Homepage