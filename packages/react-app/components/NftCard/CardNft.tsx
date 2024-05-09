import React from 'react'

interface NFTProp {
  bid: string,
  name: string,
  imageName: string
}

const CardNft = ( { imageName, name, bid }: NFTProp ) => {
  return (
    <div className='flex justify-center items-center flex-grow basis-[100px] mt-5 '>
      <div className='card flex items-center flex-col'>
        <div className=' w-[337px] h-[380px] rounded-md mt-[26px]'>
          <img src={imageName} alt="nftimag" className=' w-[100%] h-[100%]' />
        </div>
        <div className=' flex flex-row mt-[20px] justify-center gap-24 items-center'>
          <div className='text-white text-center'>
            <p>{name}</p>
            <p>Color</p>
          </div>
          <div className=' text-white'>
            <p>Bid Price</p>
            <p>{bid} Eth</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CardNft