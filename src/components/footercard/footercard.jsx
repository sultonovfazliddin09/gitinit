import React from 'react'
import { BiBox, BiRefresh } from 'react-icons/bi'
import { MdOutlineSecurity } from 'react-icons/md'

function FooterCard() {
  return (
    <div>
       <div className='bg-red-700 w-[960px] mx-auto h-[220px] items-center mt-[20px] gap-6 flex justify-around '> 
            <div className='w-[230px]'>
                <BiBox className='text-white text-[35px] mt-[10px] mb-[15px]' />
                <h1 className='text-[19px] font-bold text-gray-100'>Free Shipping Method</h1>
                <p className='text-[15px] mt-[10px] font-medium text-gray-300' >Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className='w-[230px]'>
                <MdOutlineSecurity className='text-white text-[35px] mt-[10px] mb-[15px]' />
                <h1 className='text-[19px] font-bold text-gray-100'>
                    Secure Payment System
                </h1>
                <p className='text-[15px] mt-[10px] font-medium text-gray-300'>Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className='w-[230px]'> 
                <BiRefresh className='text-white text-[35px] mt-[10px] mb-[15px]'/>
                <h1 className='text-[19px] font-bold text-gray-100'>
                    Secure Payment System
                </h1>
                <p className='text-[15px] mt-[10px] font-medium text-gray-300'>
                    Lorem ixpsacdolor sit ameasecur adipisicing elitsf edasd
                </p>
            </div>
        </div>
    </div>
  )
}

export default FooterCard