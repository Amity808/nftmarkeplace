import React from 'react'


const AboutUs = () => {
  return (
    <div className=' flex justify-center items-center flex-col mt-[150px]'>
      <div className=' items-center flex justify-center flex-col'>
        <h2 className=' font-ppReg text-[40px] lg:text-[40px] sm:text-[30px] text-white mb-[10px]'>About Us</h2>
        <p className=' text-[#FFFFFF80] text-[20px] w-[423px] lg:w-[423px] md:w-[423px] sm:w-[323px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='flex items-center justify-center flex-row gap-[90px] max-sm:flex-col max-md:flex-col md:flex-col lg:flex-row max-lg:flex-row sm:flex-col'>
        <div className=' w-[450px] rounded-md h-[600px] max-sm:w-[380px]'>
          <img src={'./splash.png'} alt="slash" className='  rounded-md' />
        </div>
        <div className=' flex justify-center flex-col w-[500px] h-[433px] max-sm:w-[380px]'>
          <h3 className='text-white  font-ppB font-bold text-[38px]'>Get Popular NFT</h3>
          <p className=' text-white text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
          {/* <button className='bg text-white font-ppB font-medium'>NFT</button> */}
        </div>
      </div>
    </div>
  )
}

export default AboutUs