'use client'
import React from 'react'
import Logo from "@/public/images/logo.png"
import Image from 'next/image' 

const HeaderTop = () => {
  return (
    <div className="className">
        <div className='grid grid-cols-12 sticky'>
        <div className='min-h-[100px] flex items-center col-span-3 pl-10 '>
          <Image className='w-[100px]' alt='Logo' src={Logo}/>
        </div>
        <div className='min-h-[100px] col-span-4 flex flex-1 items-center justyfy-center'>
            <ul className='flex w-full justify-end space-x-4 mr-6'>
                <li className='hover:cursor-pointer'>Home</li>
                <li className='hover:cursor-pointer'>About</li>
                <li className='hover:cursor-pointer'>Service</li>
                <li className='hover:cursor-pointer'>Event</li>
            </ul>
        </div>
        <div className='min-h-[100px] col-span-4 flex flex-1 items-center justify-center'>
            <ul className='w-full flex justify-end items-center space-x-3'>
                <li className='hover:cursor-pointer'>SIGN UP</li>
                <button className='hover:cursor-pointer px-5 py-3 bg-blue-600 text-white rounded-md'>LOGIN</button>
            </ul>
        </div>
    </div>
    
    </div>
  )
}

export default HeaderTop