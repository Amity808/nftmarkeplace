import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=" flex max-sm:flex-col-reverse lg:justify-between md:justify-between justify-between md:flex-row max-md:flex-col-reverse flex-row sm:flex-col-reverse max-sm:justify-center items-center ml-[121px] mr-[121px] max-md:ml-[70px] max-md:mr-[70px] max-sm:mx-0 px-2 sm:px-6 lg:px-8">
        <div className=''>
            <span>
                <p className=' font-ppB text-white font-bold text-[50px] max-sm:text-[30px]'>Create, Sell & <br /> Collect Your Own <br /> Creative NFT</p>
                <p className=" text-[#FFFFFF80] text-[20px] font-ppReg max-sm:text-[15px] pb-5">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit.</p>
            </span>
                <div className=" mt-[30px] flex gap-5">
                    <button className="btn text-white rounded-[10px] px-[20px] py-[10px] text-[20px] max-sm:text-[18px]">
                        Explore Now
                    </button>
                    <button className="bg-[#FFFFFF80] text-[20px] text-white rounded-[10px] px-[20px] py-[10px] max-sm:text-[18px]">
                        Sell Nft
                    </button>
                </div>
                <div className=' text-white flex gap-10 text-center mt-[50px]'>
                    <span>
                        <p className=' text-[20px] font-medium font-ppB'>37k+</p>
                        <p>Artist</p>
                    </span>
                    <span>
                        <p className=' text-[20px] font-medium font-ppB'>37k+</p>
                        <p>Artworks</p>
                    </span>
                    <span>
                        <p className=' text-[20px] font-medium font-ppB'>37k+</p>
                        <p>Aucations</p>
                    </span>
                </div>
        </div>
        <div className=' w-[791px] h-[617px] max-sm:w-[380px] max-md:w-[500px]  max-sm:h-[400px] flex justify-center items-center max-sm:mb-5'>
            <img src={'/heroimage.png'} className=' w-[100%] h-[100%]' alt='nfts' />
        </div>
    </div>
  )
}

export default Hero