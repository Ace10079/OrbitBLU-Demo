import React from 'react'
import { TbUserScan } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { GoListOrdered } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
const UserBoard = () => {
  return (
    <div className='no-scrollbar overflow-auto mb-10 h-full'>
  <div className='grid grid-cols-12 grid-rows-12 gap-3  '>
    <div className='grid col-span-4 row-span-12 gap-3  '>
    <div className='bg-white row-span-8 rounded-xl'>
      <div className='flex mx-8 my-6 gap-4'>
        <h1 className='bg-select-sidebar rounded-full w-24 h-24'></h1>
        <p className=' grid gap-1.5 mx-2 my-6'>
          <h1 className='font-semibold text-sm text-blue-950'>Student Name</h1>
        <span className='text-xs font-normal text-gray-700'>Department</span>
        </p>
      </div>
      <div className='flex justify-evenly '>
        <div>
           <p className='flex gap-2 items-center text-grey'>
           <span className='bg-select-sidebar rounded-full w-[22px] h-[22px] px-1 py-1 '> <TbUserScan className=' size-[14px]' /></span>
            <h1 className='font-semibold text-xs'>Gender</h1>
            </p>
           <h1 className=' font-normal text-xs mx-6 my-2 text-gray-500'>Male</h1>
           </div>
           <div>
            <p className='flex gap-2 items-center text-grey'>
           <span  className='bg-select-sidebar rounded-full w-[22px] h-[22px]  px-1 py-1  '> <CiCalendarDate className='size-[14px]'  /></span>
            <h1 className='font-semibold text-xs'>Date Of Birth</h1>
            </p>
           <h1 className='font-normal text-xs mx-6 my-2 text-gray-500'>11.07.1998</h1>
           </div>
           <div>
           <p className='flex gap-2 items-center text-grey '>
           <span  className='bg-select-sidebar rounded-full  px-1 py-1'> < GoListOrdered className='size-[14px]'  /></span>
            <h1 className=' font-semibold text-xs'>Age</h1>
            </p>
           <h1 className=' font-normal text-xs mx-6 my-2 text-gray-500'>26</h1>
           </div>
           </div>
           <div className='flex justify-center gap-2 my-1 text-sm font-normal '>
            <p className='flex items-center justify-evenly rounded-lg bg-[#FF9500] bg-opacity-15 w-36 h-10   text-[#FF9500]'><FiPhone className='size-5'/>0000000000</p>
            <p className='flex items-center justify-evenly rounded-lg bg-blue-900 bg-opacity-15 text-blue-900 w-40 h-10'><MdOutlineEmail className='size-5'/>abc@gmail.com</p>
           </div>
           <div className='mx-8 text-xs font-normal  '>
            <h1 className='my-4 font-bold text-sm text-blue-950'>Address</h1>
            <p className=' grid grid-cols-2 my-4'>
              <h1 className='text-[#48505E]'>Apartment</h1>
              <span className='text-center text-[#95A5A6]'>Name</span>
            </p>
            <p className=' grid grid-cols-2 my-4'>
              <h1 className='text-[#48505E]'>State</h1>
              <span className='text-center text-[#95A5A6]'>Tamilnadu</span>
            </p>
            <p className=' grid grid-cols-2 my-4'>
              <h1 className='text-[#48505E]'>City</h1>
              <span className='text-center text-[#95A5A6]'>Chennai</span>
            </p>
            <p className=' grid grid-cols-2 my-4'>
              <h1 className='text-[#48505E]'>Pincode</h1>
              <span className='text-center text-[#95A5A6]'>600001</span>
            </p>
           </div>
           <div>
            <p className='flex items-center justify-end mx-10 my-5'>
              <h1 className='text-[#2B3674] font-bold text-sm mx-5'>credit Balance</h1>
               <span className='bg-select-sidebar text-sm font-semibold text-blue-950 rounded-md px-5 py-3 '>100</span></p>
           </div>
    </div>
    <div className='bg-white row-span-4 py-8 '>
      <h1 className='text-blue-950 font-bold text-sm mb-8 mx-8 '>Skills:</h1>
      <p className='flex justify-around my-4 '>
        <h1 className='bg-green-600 bg-opacity-30 text-green-600 px-6 py-2 rounded-md'>lorem ipsum dolor</h1>
        <h1 className='bg-green-600 bg-opacity-30 text-green-600 pl-6 py-2  rounded-l-md'>lorem ipsum dolor</h1>
      </p>
      <p className='flex justify-around  my-4 '>
        <h1 className='bg-green-600 bg-opacity-30 text-green-600 pl-6 py-2 rounded-l-md'>lorem ips<span className='bg-white py-4 '>um dolor</span></h1>
        <h1 className='bg-green-600 bg-opacity-30 text-green-600 px-6  py-2 rounded-md'>lorem ipsum dolor</h1>
      </p>
      <p className='flex justify-around '>
        <h1 className='bg-green-600 bg-opacity-30 text-green-600 pl-6 py-2 rounded-l-md'>lorem ipsum dolor</h1>
        <h1 className='bg-green-600 bg-opacity-30 text-green-600 pl-6 py-2 rounded-l-md'>lorem ips<span className='bg-white py-4'>um dolor</span></h1>
      </p>
    </div>
    </div>
    <div className=' col-span-8 '>
    <div className='bg-white '>
      <p>Description</p>
    </div>
    </div>
    <div className='grid grid-cols-2 col-span-8 row-span-11 gap-3'>
    <div className='bg-white '>4</div>
    <div className='bg-white '>5</div>
    <div className='bg-white '>6</div>
    <div className='bg-white '>7</div>
    </div>
  </div>
</div>
  )
}

export default UserBoard