import React from 'react'
import { nfts } from "data/data.js"
import CardNft from '../NftCard/CardNft'

type Props = {}

const AllNft = (props: Props) => {
  return (
    <div className=' mt-10'>
        <div className='flex gap-1 flex-wrap w-full '>
            { nfts.map((item) => (
                <CardNft key={item.name} imageName={item.imageName} name={item.name} bid={item.bid} />
            ))}
        </div>
    </div>
  )
}

export default AllNft