import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
const AddUser = ({onClose}) => {
    const[add,setAdd]=useState(false)
    const handleUser=()=>{
       setAdd(true)
    }
    const skills=[
        {label:"Interaction Design" , value: 'InteractionDesign'},
        {label:" Visual Design", value:'VisualDesign'},
        {label:"User Testing", value:'UserTesting'}
    ];
  return (
    <> 
    <div className=" font-Source_Sans_Pro fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm">
      <div className="w-[1000px] mx-2 shadow-lg bg-white rounded-lg">
        <div className="grid  ">
          <button onClick={onClose} className=" place-self-end bg-white  rounded-full lg:-mx-4 lg:-my-5 md:-my-5 md:-mx-4 my-1 mx-1 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 ">
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="grid justify-center py-4 text-[#383E49] font-bold text-xl">
              Add Users </h1>
              <form className="grid grid-cols-12 mx-4 my-2 items-center  ">
  
              < span className='col-span-6'>
              <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                Complaint Raised from
            </label>
              <select defaultValue="from" className=" col-span-8 border border-[#D0D5DD] text-grey rounded-md w-60 h-11 px-2 ">
              <option value='from'disabled>From</option>
                <option value='call'>Call</option>
                <option value='email'>Email</option>
                <option value='sms'>From</option>
              </select>
            
             <label className=" col-span-4 text-[#48505E] text-base font-normal">
                Email Id{" "}
              </label>
              <input
                type="email"
                placeholder=" Enter your Email"
                className=" col-span-4 text-grey border border-[#D0D5DD] w-60 rounded-md  h-11 px-2 "
              />
            
            <label className="col-span-2 text-[#48505E] text-base font-normal ">
                Address 
                </label>
              <input
                type="text"
                placeholder="Enter your Address"
                className=" col-span-4 text-grey border border-[#D0D5DD] rounded-md w-60 h-11  px-2 "
              />
           
            <label className=" col-span-2  text-[#48505E] text-base font-normal ">
                City
            </label>
              <input
                type="text"
                placeholder="Enter your City"
                className="col-span-4 text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
              />
            
            <label className="col-span-2 text-[#48505E] text-base font-normal">
                State
                </label>
              <input
                type="text"
                placeholder="Enter your State"
                className=" col-span-4 text-grey border border-[#D0D5DD] rounded-md  w-60 h-11 px-2 "
              />
           
           </span>
           <span className='col-span-6 ' >
           <label className="col-span-2 text-[#48505E] text-base font-normal  ">
                Complaint Raised from
            </label>
              <select defaultValue="from" className=" border border-[#D0D5DD] text-grey rounded-md w-60 h-11 px-2 ">
              <option value='from'disabled>From</option>
                <option value='call'>Call</option>
                <option value='email'>Email</option>
                <option value='sms'>From</option>
              </select>
            
             <label className=" col-span-2 text-[#48505E] text-base font-normal">
                Email Id{" "}
              </label>
              <input
                type="email"
                placeholder=" Enter your Email"
                className=" col-span-4 text-grey border border-[#D0D5DD] w-60 rounded-md  h-11 px-2 "
              />
            
            <label className="col-span-2 text-[#48505E] text-base font-normal ">
                Address 
                </label>
              <input
                type="text"
                placeholder="Enter your Address"
                className="col-span-4 text-grey border border-[#D0D5DD] rounded-md w-60 h-11  px-2 "
              />
           
            <label className=" col-span-2  text-[#48505E] text-base font-normal ">
                City
            </label>
              <input
                type="text"
                placeholder="Enter your City"
                className="col-span-4 text-grey border border-[#D0D5DD] rounded-md  w-60 h-11 px-2 "
              />
            
            <label className="col-span-2 text-[#48505E] text-base font-normal">
                State
                </label>
              <input
                type="text"
                placeholder="Enter your State"
                className=" col-span-4 text-grey border border-[#D0D5DD] rounded-md  w-60 h-11 px-2 "
              />

           </span>
           
            

            <div className=" flex col-span-12 justify-center gap-3 my-5 ">
              <button className="text-red-600 border-red-600 border px-8 py-2 rounded">
                Cancel
              </button>
              <button className="bg-orange px-10 py-2 rounded text-white">
                Save
              </button>
            </div> 
          </form>
        </div>
    </div>
</div>
    </>

  )
}

export default AddUser