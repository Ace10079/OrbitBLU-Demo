import React, { useState } from "react";
import Leads from "../../assets/leadsScreen.png";
import FollowUp from "./AddFollowUp";
import EditLeads from "./EditLeads";
import AddFollowUp from "./AddFollowUp";

const LeadsDetails = () => {
  const[add,setAdd]=useState(false)
  const[edit,setEdit]=useState(false)
  const handleFollowup=()=>{
    setAdd(true)
  }
  const handleEdit=()=>{
    setEdit(true)
  }
  return (
    <>
    <div className=" mb-3 overflow-auto no-scrollbar">
      <div className="flex justify-between my-2  ">
        <h1 className="font-Exo text-[#2C3E50] font-semibold text-xl px-1 py-2">
          Lead Details
        </h1>
        <button onClick={handleFollowup} className="font-Source_Sans_Pro font-normal text-xs bg-orange rounded-md text-white px-12 py-2 ">
          Add FollowUp
        </button>
      </div>
      <div className="grid  gap-6  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 my-4 ">
        <div className=" bg-[#7ABDFF33] rounded-xl drop-shadow-lg  ">
          <div className=" flex justify-between h-36  " >
            <p className="text-[#2337C6] px-5 py-5 font-semibold text-lg font-Source_Sans_Pro">
              Welcome Back!!!
            </p>
          </div>
          <div className=" bg-white flex justify-between items-center rounded-b-lg   ">
          <div className="mx-6">
              <span className="drop-shadow-md shadow-lg grid -mt-10  text-white font-semibold text-4xl bg-[#2337C6] rounded-full  w-20 h-20 items-center justify-center ">
               K
              </span>
              <p className=" my-3  text-grey font-semibold text-base">
                Profile name
              </p>
              <p className="my-3  text-[#D1D1D1] text-base font-normal">
                00000 00000
              </p>
            </div>
            <div className="grid -mt-44 mx-6">
            <img src={Leads} alt="Image" className="my-7 w-[128px]" /> 
             <button onClick={handleEdit} className=" text-white font-normal text-xs bg-orange rounded-md  py-3">
              Edit Leads
            </button>
            </div>
          </div>
        </div>
        <div className="text-[#2C3E50] font-Source_Sans_Pro flex  flex-col gap-5 bg-white py-5  px-5 rounded-xl  drop-shadow-lg   ">
          <h1 className="font-semibold text-base">Lead Follow Ups</h1>
          <p className="font-normal text-sm">
            {" "}
            Next Follow up on 30/09/2024
            <br />
            <span className="text-[#D1D1D1] text-xs ">Zoom meeting link:</span>
          </p>
          <p className="font-normal text-sm ">
            Ravikumar | 27/09/2024 | 10:00am
          </p>
        </div>
        <div className=" grid font-Source_Sans_Pro text-sm font-semibold text-[#2C3E50]w-[538px] h-[359px] bg-white rounded-xl drop-shadow-lg px-8 py-8 gap-2 ">
          <h1 className="mb-3 text-base text-[#2C3E50]">Basic Information</h1>
          <h1 className=" grid  grid-cols-2 items-center">
            Complaint Raised from:
            <span className=" text-grey font-normal">Call</span>
          </h1>
          <h1 className=" grid grid-cols-2 items-center">
            Created At:
            <span className=" text-grey font-normal"> 27/09/2024 10:00 am</span>
          </h1>
          <h1 className=" grid grid-cols-2 items-center">
            Email:
            <span className=" text-grey font-normal"> ravikumar@gmail.com </span>
          </h1>
          <h1 className="grid grid-cols-2 items-center">
            Address :<span className=" text-grey font-normal"> Chennai </span>
          </h1>
          <h1 className=" grid grid-cols-2 items-center">
            City :<span className=" text-grey font-normal"> Chennai </span>
          </h1>
          <h1 className="grid grid-cols-2 items-center">
            State :<span className=" text-grey font-normal">Tamilnadu</span>
          </h1>
          <h1 className="grid grid-cols-2 items-center">
            Note :<span className=" text-grey font-normal"> Test </span>
          </h1>
        </div>
      </div>
    </div>
    { add && <AddFollowUp onClose={()=>setAdd(false)}/>}
    { edit && <EditLeads onClose={()=>setEdit(false)}/>}
    </>
  );
};

export default LeadsDetails;