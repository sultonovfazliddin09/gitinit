import React from 'react'

function Footer() {
  return (
    <div className='flex justify-around gap-6 ml-[120px] mx-auto mt-[30px]'>
        <div className='w-[262px] h-[151px]'>
            <img className='mb-[30px]' src="https://themewagon.github.io/timezone/assets/img/logo/logo2_footer.png" alt="" />
            <p className='text-gray-400'>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p> 
        </div>
        <div>
            <h1 className='text-[21px] mb-[30px] font-bold'>Quick Links</h1>
            <ul>
                <li className='hover:text-red-600 font-medium text-gray-400'>About</li>
                <li  className='hover:text-red-600 font-medium text-gray-400'>Offers & Discounts</li>
                <li  className='hover:text-red-600 font-medium text-gray-400'>Get Coupon</li>
                <li  className='hover:text-red-600 font-medium text-gray-400'>Contact Us</li>
            </ul>
        </div>
        <div>
            <h1 className='text-[21px] mb-[30px] font-bold'>New Products</h1>
              <ul>
                <li className='hover:text-red-600 font-medium text-gray-400'>Woman Cloth</li>
                <li className='hover:text-red-600 font-medium text-gray-400'>Fashion Accessories</li>
                <li className='hover:text-red-600 font-medium text-gray-400'>Man Accessories </li>
                <li  className='hover:text-red-600 font-medium text-gray-400'>Rubber made Toys</li>
            </ul>
        </div>
        <div>
            <h1 className='text-[21px] mb-[30px] font-bold'>Support</h1>
                 <ul>
                <li className='hover:text-red-600 font-medium text-gray-400'>Frequently Asked Questions</li>
                <li className='hover:text-red-600 font-medium text-gray-400'>Terms & Conditions</li>
                <li  className='hover:text-red-600 font-medium text-gray-400'>Privacy Policy</li>
                <li className='hover:text-red-600 font-medium text-gray-400'>Report a Payment Issue</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer