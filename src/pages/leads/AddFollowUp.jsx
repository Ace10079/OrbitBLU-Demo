import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const AddFollowUp = ({onClose}) => {
    
  return (
    <>
    <div className=" font-Source_Sans_Pro fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm">
    <div className=' bg-white rounded-lg shadow-lg:h-[643px] md:h-[643px] h-[480px]  '>
       <div  className='grid   '>
        <button onClick={onClose} className='place-self-end bg-white  rounded-full lg:-mx-4 lg:-my-5 md:-my-5 md:-mx-4 my-1 mx-1 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 '><IoClose className='size-[24px]' /></button>
        <h1 className=' grid justify-center  text-[#383E49] font-bold text-xl lg:my-8 md:my-8 my-2 lg:py-6 md:py-6 py-0'>Next Follow Up</h1>
        <form className='grid grid-cols-6 justify-center w-[379px] gap-8 lg:mx-14 md:mx-14 mx-2'>  
           <label className=" col-span-6 font-normal text-base text-black ">Next Follow Up</label>
            <input type='date' className='col-span-6  border border-[#D0D5DD] rounded-lg py-2 px-2 text-[#D0D5DD]'/> 
            <label className="  font-normal text-base text-black">Note</label>
            <textarea  rows={4} className=' col-span-6 border border-[#D0D5DD] rounded-lg px-2 py-2 h-28 text-xs font-normal text-[#D0D5DD]'placeholder='Follow up note'/>
            <div className=' col-span-6 flex justify-center gap-3  lg:py-20 md:py-20 py-0'>
            <button className='text-red-600 border-red-600 border px-8 py-2 rounded'>Cancel</button>
            <button className='bg-orange px-10 py-2 rounded text-white'>Save</button>
            </div>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default AddFollowUp