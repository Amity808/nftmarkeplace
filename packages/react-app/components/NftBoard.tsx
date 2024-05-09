import React from 'react'

type Props = {}

const NftBoard = (props: Props) => {
    return (
        <div className='get-nft  w-full my-4 rounded-md'>
            <div className=' py-10% px-5% flex justify-center flex-col items-center text-center'>
                <div className='py-[30px] text-lg font-bold text-white'>
                    <h2>Get ready to collect <br />
                        our NFT</h2>
                </div>
                <div className='py-[30px]'>
                <button className=' bg-[#c688dd] py-[10px] px-[20px] rounded-md text-white'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default NftBoard