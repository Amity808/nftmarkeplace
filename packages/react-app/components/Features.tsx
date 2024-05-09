import React from 'react'
import FeatureSNft from "@/components/Listitem/FeatureSNft"

type Props = {}

const Features = (props: Props) => {
  return (
    <div className=' flex justify-center items-center flex-col mt-[200px]'>
        <h2 className=' text-white font-ppReg font-bold text-[40px]'>Featured Artworks</h2>
        <span>
            <p className=' text-white/70 text-xl font-medium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </span>
        <div>
            <FeatureSNft />
        </div>
    </div>
  )
}

export default Features